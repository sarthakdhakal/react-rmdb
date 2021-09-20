import styled from "styled-components";

export const Spinner = styled.div`
    border: 5px solid var(--lightGray);
    border-top: 5px solid var(--medgrey);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation : spin 1.6s linear infinite;
    margin:20px auto;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);  
        }
    
    }
        `;
