import React from "react";

class Sidebar  extends React.Component{
    render(){
        return (
            <div className = "side">
                <p>
                    Thông tin tác giả
                    <span>
                        {/* <a href="javascript:;" onclick="profileOnEdit()">Sửa</a> */}
                    </span>
                </p>
                <p>- Họ tên: <span>. . . .</span></p>
                <p>- Ngày sinh: <span>. . . .</span></p>
                <p>- Giới tính: <span>. . . .</span></p>
                <p>- Địa chỉ: <span>. . . .</span></p>
                {/* <p><img src="./img/avatar-chim-canh-cut.jpg" style="filter:grayscale(50%);"></p> */}
            </div>
        );
    }

}

export default Sidebar;