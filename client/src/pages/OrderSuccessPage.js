import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

function OrderSuccessPage() {
  useEffect(() => {
      setTimeout(() => {
        navigate("/orders", { replace: true });
      }, 30000);
  }, []);
  const navigate = useNavigate();
  return (
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
          padding: "20px",
          marginTop: "70px",
        }}
      >
        <div>
          <img
            style={{ width: "400px", maxWidth: "100%" }}
            src="success.png"
            alt=""
          />
          <div
            style={{
              fontSize: "2em",
              marginTop: "-30px",
              marginBottom: "30px",
              fontWeight: 500,
            }}
          >
            Order Completed !
          </div>
          <Button
            style={{ backgroundColor: "#2874f0" }}
            variant="contained"
            color="primary"
          >
            <Link to="/orders">My Orders</Link>
          </Button>
        </div>
      </div>
  );
}

export default OrderSuccessPage;
