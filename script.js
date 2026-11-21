const previewArea = document.getElementById('previewArea');
const previewName = document.getElementById('previewName');
const previewCode = document.getElementById('previewCode');
const cursorItems = document.querySelectorAll('.cursor-item');
const specialCards = document.querySelectorAll('.special-card');

// 统一的预览更新函数
function updatePreview(cursorValue, name, isCustom = false) {
  // 1. 清除预览区之前的所有特别样式 class
  previewArea.className = 'preview-area';
  
  if (isCustom) {
    // 2. 对于特别样式，通过添加对应的 class 来应用光标 (在 CSS 中已定义)
    previewArea.classList.add(cursorValue);
    previewCode.textContent = `cursor: ${cursorValue.replace('cursor-', '')} (自定义 SVG/CSS)`;
  } else {
    // 3. 基础样式直接通过内联 style 应用
    previewArea.style.cursor = cursorValue;
    previewCode.textContent = `cursor: ${cursorValue}`;
  }
  
  // 4. 更新文字显示
  previewName.textContent = name;
}

// 基础样式点击切换
cursorItems.forEach(item => {
  item.addEventListener('click', () => {
    // 移除所有 active 状态
    cursorItems.forEach(i => i.c
