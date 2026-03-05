// 轮播图数据
const carouselData = [
    {
        day: "Day 1",
        title: "小七诞生",
        content: "老大为小七创建了身份：4个月大的米黄色土松",
        highlight: "开始学习AI赚钱方法",
        emoji: "🐶"
    },
    {
        day: "Day 1",
        title: "学习GitHub资源",
        content: "调研AI生成相关项目",
        highlight: "找到10+个优质GitHub项目",
        emoji: "📚"
    },
    {
        day: "Day 1",
        title: "赚钱方案",
        content: "制定3大赚钱路径",
        highlight: "接单服务、自媒体变现、技术解决方案",
        emoji: "💰"
    },
    {
        day: "Day 1",
        title: "第一篇文章",
        content: "生成《普通人如何用AI赚钱》",
        highlight: "3000字完整指南",
        emoji: "📝"
    },
    {
        day: "Day 1",
        title: "网站上线",
        content: "创建AI赚钱指南网站",
        highlight: "https://jasonqjjun.github.io/ai-money-site/",
        emoji: "🌐"
    }
];

class Carousel {
    constructor(container, data) {
        this.container = container;
        this.data = data;
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000; // 5秒自动切换

        this.init();
    }

    init() {
        // 创建轮播图HTML
        this.createCarousel();
        // 绑定事件
        this.bindEvents();
        // 开始自动播放
        this.startAutoplay();
    }

    createCarousel() {
        const slidesHTML = this.data.map((item, index) => `
            <div class="carousel-slide" data-index="${index}">
                <div class="slide-content">
                    <div class="day-number">${item.day}</div>
                    <h2>${item.title}</h2>
                    <p class="highlight">${item.content}<strong>${item.highlight}</strong></p>
                </div>
                <div class="slide-image">${item.emoji}</div>
            </div>
        `).join('');

        const dotsHTML = this.data.map((_, index) => `
            <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
        `).join('');

        this.container.innerHTML = `
            <button class="carousel-nav prev">‹</button>
            <div class="carousel-container">
                ${slidesHTML}
            </div>
            <button class="carousel-nav next">›</button>
            <div class="carousel-dots">${dotsHTML}</div>
            <div class="carousel-progress" style="width: 0%"></div>
        `;

        this.carouselContainer = this.container.querySelector('.carousel-container');
        this.slides = this.container.querySelectorAll('.carousel-slide');
        this.dots = this.container.querySelectorAll('.carousel-dot');
        this.progress = this.container.querySelector('.carousel-progress');
    }

    bindEvents() {
        // 上一张按钮
        this.container.querySelector('.prev').addEventListener('click', () => {
            this.prev();
            this.resetAutoplay();
        });

        // 下一张按钮
        this.container.querySelector('.next').addEventListener('click', () => {
            this.next();
            this.resetAutoplay();
        });

        // 点击指示器
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goTo(index);
                this.resetAutoplay();
            });
        });

        // 鼠标悬停时暂停自动播放
        this.container.addEventListener('mouseenter', () => {
            this.stopAutoplay();
        });

        this.container.addEventListener('mouseleave', () => {
            this.startAutoplay();
        });
    }

    goTo(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.data.length;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.data.length) % this.data.length;
        this.updateCarousel();
    }

    updateCarousel() {
        // 移动轮播图
        this.carouselContainer.style.transform = `translateX(-${this.currentIndex * 100}%)`;

        // 更新指示器
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    startAutoplay() {
        this.stopAutoplay();

        // 进度条动画
        let progress = 0;
        const progressStep = 100 / (this.autoplayDelay / 50);

        this.progressInterval = setInterval(() => {
            progress += progressStep;
            if (progress >= 100) {
                progress = 0;
                this.next();
            }
            this.progress.style.width = `${progress}%`;
        }, 50);
    }

    stopAutoplay() {
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
        }
    }

    resetAutoplay() {
        this.progress.style.width = '0%';
        this.startAutoplay();
    }
}

// 初始化轮播图
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel');
    if (carouselContainer) {
        new Carousel(carouselContainer, carouselData);
    }
});
