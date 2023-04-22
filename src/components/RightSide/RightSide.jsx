import React from "react";

import s from "./RightSide.module.css";
import Modal from "../Modal/Modal";

const RightSide = () => {
  return (

      <div className={s.add_post_modal}>
        <Modal />
      </div>

  );
};

export default RightSide;
