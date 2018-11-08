import React from "react"

// styles
import "../scss/Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <svg
                viewBox="0 0 491 492"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M245.5 486.5C378.324 486.5 486 378.824 486 246L4.99999 246C5 378.825 112.676 486.5 245.5 486.5Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="10"
                />
                <path
                    d="M245.5 5C112.676 5 5 112.676 4.99999 245.5L486 245.5C486 112.676 378.324 5.00001 245.5 5Z"
                    fill="#FF1C1C"
                    stroke="black"
                    strokeWidth="10"
                />
                <circle
                    cx="245.5"
                    cy="245.5"
                    r="64.5"
                    fill="white"
                    stroke="black"
                    strokeWidth="10"
                />
                <circle
                    cx="245.5"
                    cy="245.5"
                    r="39.9327"
                    fill="white"
                    stroke="black"
                    strokeWidth="3"
                />
            </svg>
        </div>
    )
}

Footer.propTypes = {}
Footer.defaultProps = {}

// export
export default Footer
