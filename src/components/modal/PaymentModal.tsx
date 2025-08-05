// src/components/modal/PaymentModal.tsx
import React, { useState } from "react";
import { toast } from "react-toastify";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderTotal: number;
  onConfirmOrder: (paymentMethod: string) => void;
  radioSize?: 'small' | 'medium' | 'large'; // Add size prop
}

const PaymentModal: React.FC<PaymentModalProps> = ({ 
  isOpen, 
  onClose, 
  orderTotal, 
  onConfirmOrder,
  radioSize = 'medium' // Default size
}) => {
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const paymentMethods = [
    { id: "credit", label: "Credit Card", icon: "💳" },
    { id: "debit", label: "Debit Card", icon: "💳" },
    { id: "googlepay", label: "Google Pay", icon: "📱" },
    { id: "cod", label: "Cash on Delivery", icon: "💰" }
  ];

  const handlePaymentChange = (paymentId: string) => {
    setSelectedPayment(paymentId);
  };

  const handleConfirmOrder = () => {
    if (!selectedPayment) {
      toast.error("Please select a payment method");
      return;
    }

    onConfirmOrder(selectedPayment);
    
    if (selectedPayment === "cod") {
      toast.success("Order placed successfully");
    }
    
    onClose();
  };

  // Get radio size class
  const getRadioSizeClass = () => {
    switch (radioSize) {
      case 'small':
        return 'radio-small';
      case 'large':
        return 'radio-large';
      default:
        return '';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal fade show payment-modal" style={{ display: "block" }} aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Select Payment Method</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="payment-methods">
              <div className="order-summary mb-4">
                <h6>Order Total: <span className="fw-bold">${orderTotal.toFixed(2)}</span></h6>
              </div>
              
              <div className="payment-options">
                <h6 className="mb-3">Choose Payment Method:</h6>
                {paymentMethods.map((method) => (
                  <div key={method.id} className="form-check mb-3">
                    <input
                      className={`form-check-input ${getRadioSizeClass()}`}
                      type="radio"
                      name="paymentMethod"
                      id={method.id}
                      value={method.id}
                      checked={selectedPayment === method.id}
                      onChange={() => handlePaymentChange(method.id)}
                    />
                    <label className="form-check-label d-flex align-items-center" htmlFor={method.id}>
                      <span className="me-2">{method.icon}</span>
                      {method.label}
                    </label>
                  </div>
                ))}
              </div>

              {selectedPayment && (
                <div className="payment-info mt-3 p-3 bg-light rounded">
                  {selectedPayment === "cod" && (
                    <p className="mb-0 text-muted">
                      <i className="fas fa-info-circle me-2"></i>
                      You will pay when your order is delivered to your address.
                    </p>
                  )}
                  {(selectedPayment === "credit" || selectedPayment === "debit") && (
                    <p className="mb-0 text-muted">
                      <i className="fas fa-info-circle me-2"></i>
                      You will be redirected to secure payment gateway.
                    </p>
                  )}
                  {selectedPayment === "googlepay" && (
                    <p className="mb-0 text-muted">
                      <i className="fas fa-info-circle me-2"></i>
                      Pay securely with your Google Pay account.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleConfirmOrder}
              disabled={!selectedPayment}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
