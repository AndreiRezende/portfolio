import { useEffect } from 'react';
import { gsap } from 'gsap';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  useEffect(() => {
    // Variáveis com tipos explícitos e valores iniciais
    let width: number = window.innerWidth;
    let height: number = window.innerHeight;
    let largeHeader: HTMLElement | null = document.getElementById('large-header');
    let canvas: HTMLCanvasElement | null = document.getElementById('demo-canvas') as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null = canvas?.getContext('2d') || null;
    let points: any[] = [];
    let target: {x: number, y: number} = {x: width/2, y: height/2};
    let animateHeader: boolean = true;

    // Função auxiliar para calcular distância
    const getDistance = (p1: {x: number, y: number}, p2: {x: number, y: number}): number => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    // Classe Circle
    class Circle {
      pos: {x: number, y: number};
      radius: number;
      color: string;
      active: number = 0;

      constructor(pos: {x: number, y: number}, rad: number, color: string) {
        this.pos = pos;
        this.radius = rad;
        this.color = color;
      }

      draw() {
        if (!this.active || !ctx) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(156,217,249,'+ this.active + ')';
        ctx.fill();
      }
    }

    // Função para desenhar linhas
    const drawLines = (p: any) => {
      if (!p.active || !ctx) return;
      for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(156,217,249,'+ p.active + ')';
        ctx.stroke();
      }
    }

    // Função para animar pontos
    const shiftPoint = (p: any) => {
      if (!p) return;
      
      gsap.to(p, {
        duration: 1 + Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: "power2.inOut",
        onComplete: () => shiftPoint(p)
      });
    }

    // Função principal de animação
    const animate = () => {
      if (animateHeader && ctx) {
        ctx.clearRect(0, 0, width, height);
        for (let i in points) {
          const distance = Math.abs(getDistance(target, points[i]));
          
          if (distance < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if (distance < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (distance < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    // Função de inicialização da animação
    const initAnimation = () => {
      animate();
      for (let i in points) {
        shiftPoint(points[i]);
      }
    }

    // Função de redimensionamento
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (largeHeader) {
        largeHeader.style.height = height + 'px';
      }
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }

    // Função de verificação de scroll
    const scrollCheck = () => {
      if (document.body.scrollTop > height) {
        animateHeader = false;
      } else {
        animateHeader = true;
      }
    }

    // Função de movimento do mouse
    const mouseMove = (e: MouseEvent) => {
      let posx = 0;
      let posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    }

    // Função para adicionar listeners
    const addListeners = () => {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    }

    // Função de inicialização do header
    const initHeader = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      target = {x: width/2, y: height/2};

      largeHeader = document.getElementById('large-header');
      if (largeHeader) {
        largeHeader.style.height = height + 'px';
      }

      canvas = document.getElementById('demo-canvas') as HTMLCanvasElement;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
      }

      // Criar pontos
      points = [];
      for (let x = 0; x < width; x = x + width/20) {
        for (let y = 0; y < height; y = y + height/20) {
          const px = x + Math.random() * width/20;
          const py = y + Math.random() * height/20;
          const p = {x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // Encontrar os 5 pontos mais próximos para cada ponto
      for (let i = 0; i < points.length; i++) {
        const closest = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (!(p1 == p2)) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] == undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // Atribuir um círculo a cada ponto
      for (let i in points) {
        const c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
        points[i].circle = c;
      }
    }

    // Inicialização
    initHeader();
    addListeners();
    initAnimation();

    // Limpeza
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="large-header" id="large-header" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <canvas id="demo-canvas"></canvas>
    </div>
  );
};

export default AnimatedBackground;