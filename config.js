// ============== KITA INTERVIEW - CẤU HÌNH TẬP TRUNG ==============
// File này được load trên TẤT CẢ trang. Edit file này → Push GitHub → mọi máy/trình duyệt
// đều tự đồng bộ. Không cần setup từng browser.
//
// 👉 Để sửa: Mở /quan-tri/ → điền form → Download file mới → thay file này → Push.
//
// Sinh tự động bởi /quan-tri/ - đừng sửa thủ công nếu không hiểu cấu trúc.

window.KITA_CONFIG = {
  // Google Sheet Web App URL
  cloudUrl: "https://script.google.com/macros/s/AKfycbyOw718OxicdwJzOtpcKHJLX0wBz4sHGfb14CCmQCmiBq-CgzF4h6KqNjU-UwdrQgD-/exec",

  // API Key bảo vệ Apps Script
  cloudApiKey: "KITA-MyTeam-2026",

  // AI Provider mặc định: 'gemini' (free) | 'manual' (no-key) | 'openai' | 'claude' | ''
  // Để rỗng = mỗi user tự chọn ở /cv-ai/
  aiProvider: "",

  // Google Gemini (FREE 1500/day) - lấy tại https://aistudio.google.com/app/apikey
  geminiKey: "",
  geminiModel: "gemini-2.0-flash-exp",

  // OpenAI (cần trả phí)
  openaiKey: "",
  openaiModel: "gpt-4o-mini",

  // Claude (cần trả phí, key đặt trong Apps Script)
  claudeModel: "claude-haiku-4-5-20251001",

  // Phiên bản & timestamp
  configVersion: "1.1",
  updatedAt: "2026-04-28"
};
