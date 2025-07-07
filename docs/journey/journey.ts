export class ScrollButton {
    private elem: HTMLElement;
    constructor(private container: HTMLElement) {
        this.elem = document.createElement('div');
        this.elem.classList.add('scroll-button')
        this.container.appendChild(this.elem);
        Object.assign(this.elem.style, {
            position: 'absolute',
            right: 5,
            width: 50,
            height: 50,
            background: 'red'
        });
    }

    setIsDark() {
        this.elem.style.border = '1px solid #CCC';
    }
}

export class Journey {
    private isDark = false;
    private ctx: CanvasRenderingContext2D;
    private left;
    private right;

    constructor(private container: HTMLCanvasElement) {
        const canvas = container.querySelector('canvas')!;
        this.ctx = canvas.getContext('2d')!;
        this.redraw();
        this.right = new ScrollButton(container);
        this.left = new ScrollButton(container);
    }
    setIsDark(dark: boolean) {
        this.isDark = dark;
        this.right.setIsDark(dark);
        this.left.setIsDark(dark);
        this.redraw();
    }
    private clear() {
        this.ctx.clearRect(0, 0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
    private redraw() {
        this.clear();
        this.drawBaseLine();
    }

    private drawBaseLine() {
        const color = this.isDark ? 'white' : 'black';
        const ctx = this.ctx;
        const padding = 15;
        const maxX = 100;
        const paddingTop = 50;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(padding, paddingTop);
        ctx.lineTo(maxX - padding, paddingTop);
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(maxX - padding, paddingTop);
        ctx.lineTo(maxX - padding, 1600);
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.stroke();

        // Draw year markers (竖着的)
        for (let i=2010; i <= 2025; i++) {
            const x = 100 - padding;
            const year = i - 2010;
            const top = 100;
            const gap = 100;
            ctx.beginPath();
            ctx.moveTo(x, top + year * gap);
            ctx.lineTo(x + 10, top + year * gap);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#CCC';
            ctx.stroke();

            // draw text
            ctx.font = '12px Arial';
            ctx.fillStyle = color;
            ctx.fillText(i.toString(), x + 15, top + year * gap + 5);
            
        }
    }
}


export function redraw(canvas: HTMLCanvasElement, isDark: boolean) {
    console.log('redraw', canvas, isDark);
}
