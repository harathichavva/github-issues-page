import React from "react";

const Card = ({ issue }) => {
  return (
    <>
      <div className="card my-3 border">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className="col-md-5 d-flex align-items-start "> 
          <span className=" h5 card-title ">
            <i className="bi bi-play-circle text-success p-2"></i>
            {issue.title}
          </span></div>
          <div className="col-md-4">
          <span class="badge bg-success px-3 py-2 ">Status : {issue.state}</span>
          
          </div>
          <div className="col-md-4">
          <span className="">
            <i className="bi bi-chat-left me-2"></i>
            {issue.comments}
          </span>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-around">
          <small>#{issue.number}</small>
          <small>updated_at : {issue.updated_at}</small>
          <small> by {issue.user.login}</small>
        </div>
      </div>
    </>
  );
};

export default Card;
