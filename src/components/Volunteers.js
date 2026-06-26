import React from "react";
import { volunteersData } from "../volunteersData";

function Volunteers() {
  return (
    <div className="volunteers-section">
      <div className="nav-volunteers">
        <div className="title-volunteers">
          <h1>المتطوعين الحاليين :</h1>
          <span> ( 22 متطوع )</span>
        </div>
        <div className="number-needed">
          العدد المطلوب: <span>22</span>
        </div>
      </div>
      <div className="volunteers-grid">
        {volunteersData.map((volunteer) => (
          <div key={volunteer.id} className="volunteer-card">
            <img
              src={volunteer.image}
              alt={volunteer.name}
              className="avatar"
            />
            <div className="info">
              <h4 className="name">{volunteer.name}</h4>
              <span className="role">({volunteer.role})</span>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-all-volunteers">
        <button>عرض الكل </button>
      </div>
    </div>
  );
}

export default Volunteers;
