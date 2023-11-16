<script>
  document.getElementById('randomButton').addEventListener('click', function() {
    // Mảng chứa các đường link bạn muốn chuyển hướng đến
    var links = [
      'https://www.example.com/page1',
      'https://www.example.com/page2',
      'https://www.example.com/page3',
      // Thêm các đường link khác nếu cần
    ];

    // Chọn ngẫu nhiên một số từ 0 đến độ dài của mảng links
    var randomIndex = Math.floor(Math.random() * links.length);

    // Chuyển hướng đến đường link đã chọn mở trong tab mới
    window.open(links[randomIndex], '_blank');
  });
</script>
