import React from 'react';

class Thongtintacgia extends React.Component {
    render() {
      return (
        <div className="side">
            <p>
                Thông tin tác giả
                <span id="profileActionButtons">
                    
                </span>
            </p>
            <p>- Họ tên: <span id="name">. . . .</span></p>
            <p>- Ngày sinh: <span id="birthday">. . . .</span></p>
            <p>- Giới tính: <span id="sex">. . . .</span></p>
            <p>- Địa chỉ: <span id="address">. . . .</span></p>
            {/* <p><img src="./img/avatar-chim-canh-cut.jpg" style="filter:grayscale(50%);"></p> */}
        </div>
      );
    }
  }
  export default Thongtintacgia;