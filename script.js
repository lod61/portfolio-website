document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 这里添加表单提交逻辑
        // 可以使用 AJAX 或 Fetch API 发送表单数据到服务器
        console.log('表单已提交');
        
        // 清空表单
        contactForm.reset();
    });

    // 这里可以添加图片画廊的动态加载逻辑
    // 例如: 使用 AJAX 从服务器获取图片数据并动态创建图片元素
});
