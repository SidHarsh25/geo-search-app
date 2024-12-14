import React, { useState } from 'react';

const Pagination = ({ 
    currentPage, 
    totalPages, 
    onPageChange, 
    limit, 
    onLimitChange 
}) => {
    const [warning, setWarning] = useState('');

    const handleLimitChange = (e) => {
        const value = Number(e.target.value);
        if (value > 10) {
            setWarning('Maximum limit is 10!');
        } else if (value < 1) {
            setWarning('Minimum limit is 1!');
        } else {
            setWarning('');
            onLimitChange(value);
        }
    };

    return (
        <div className="pagination">
            <div className="pagination-controls">
                <button 
                    className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Previous
                </button>
                <span className="pagination-info">
                    Page {currentPage} of {totalPages}
                </span>
                <button 
                    className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
            <div className="limit-box">
                <input 
                    className="limit-input"
                    type="number"
                    value={limit}
                    onChange={handleLimitChange}
                    min={1}
                    max={10}
                    placeholder="Limit"
                />
                {warning && (
                    <p className="warning">
                        {warning}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Pagination;
