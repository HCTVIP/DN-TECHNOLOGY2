import './Footer.scss';

const Footer = () => {
   return (
      <div className="footer-container">
         <div className="introduce">
            <h2 className="content">Nhóm của chúng tôi</h2>
            <p className="desc">Hãy cho mọi người biết về những chuyên gia máy tính hàng đầu của bạn</p>
            <button className="button">TÌM HIỂU THÊM</button>
         </div>
         <div className="history">
            <h2 className="content">Lịch sử của chúng tôi</h2>
            <p className="desc">Chia sẻ khi nào và tại sao bạn ra mắt doanh nghiệp của mình</p>
            <button className="button">TÌM HIỂU THÊM</button>
         </div>
         <div className="skill">
            <h2 className="content">Chuyên môn của chúng tôi</h2>
            <p className="desc">Mô tả các dịch vụ IT và máy tính bạn thực hiện tốt nhất</p>
            <button className="button">TÌM HIỂU THÊM</button>
         </div>
      </div>
   );
};

export default Footer;
