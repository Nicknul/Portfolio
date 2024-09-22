// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081; // 포트를 원하는 번호로 변경할 수 있습니다.

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'dist')));

// 모든 경로를 index.html로 리다이렉트하여 클라이언트 사이드 라우팅 처리
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
