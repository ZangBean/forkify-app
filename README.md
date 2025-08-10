# Forkify Project

Forkify là một ứng dụng web cho phép người dùng tìm kiếm công thức nấu ăn, xem chi tiết, điều chỉnh số lượng nguyên liệu, lưu công thức yêu thích và thậm chí thêm công thức mới của riêng mình.  
Dự án được xây dựng khi học khóa "The Complete JavaScript Course" của Jonas Schmedtmann.

## Tính năng chính
- **Tìm kiếm công thức nấu ăn** theo từ khóa (API từ [Forkify API](https://forkify-api.herokuapp.com/)).
- **Xem chi tiết công thức** bao gồm nguyên liệu, thời gian nấu và số lượng khẩu phần.
- **Thêm công thức mới** và lưu vào API.
- **Lưu công thức yêu thích** vào localStorage.
- **Điều chỉnh số lượng nguyên liệu** theo khẩu phần mong muốn.
- **Loading spinner** khi chờ dữ liệu.
- **Thông báo lỗi & thành công** thân thiện.

## Công nghệ sử dụng
- **HTML5, CSS3, JavaScript (ES6+)**
- **Parcel** bundler
- **Forkify API**
- **LocalStorage** để lưu dữ liệu.

## Cấu trúc thư mục

```plaintext
├── src
│ ├── js
│ │ ├── model.js
│ │ ├── views
│ │ │ ├── View.js
│ │ │ ├── recipeView.js
│ │ │ ├── resultsView.js
│ │ │ ├── bookmarksView.js
│ │ │ └── addRecipeView.js
│ │ └── controller.js
│ ├── index.html
│ └── sass
├── package.json
└── README.md
