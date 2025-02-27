import styled from "styled-components";
import { CgSoftwareDownload, MdContentCopy } from "react-icons/all";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    background: transparent;
    display: flex;
    justify-content: center;
    margin: 0 0 25px 0;

    align-items: center;
    gap: 5px;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Select = styled.select`
    padding: 0.5rem;
    padding-left: 1rem;
    font-size: 1rem;
    min-width: 300px;
    flex: 1;
    color: #ffffff;
    background: #131313;
    border-radius: 5px;
    border: 1px solid #212121;

    @media (max-width: 768px) {
        padding-left: 0.5rem;
        min-width: auto;
        width: 100%;
    }
`;

export const SelectSection = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
`;

export const Input = styled.input`
    padding: 0.5rem;
    padding-left: 1rem;
    font-size: 1.3rem;
    min-width: 300px;
    flex: 1;
    color: #ffffff;
    background: #131313;
    border: 1px solid #212121;
    border-radius: 5px;
    @media (max-width: 768px) {
        padding-left: 0.5rem;
        min-width: auto;
        width: 100%;
    }
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
    font-weight: 525;
    background-color: orange;
    color: #131313;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    border: 1px solid #212121;
    align-items: center;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: greenyellow;
        color: #131313;
        scale: 1.01;
        transition: all 0.2s ease-in-out;
    }

    @media (max-width: 768px) {
        width: 100%;

        &:hover {
            background-color: greenyellow;
            color: #363636;
            scale: 1.01;
            transition: all 0.2s ease-in-out;
        }
    }
`;

export const LoadingButton = styled.div`
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
    font-weight: 525;
    background-color: orange;
    border: 1px solid #212121;
    color: #131313;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 2px;
    width: 100%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const OpenPortsList = styled.ul`
    border: 1px solid #212121;
    list-style: none;
    padding: 15px 30px;
    margin-top: 2rem;
    background: #0e0e0e;
    border-radius: 10px;

    @media (max-width: 768px) {
        padding: 15px 10px;
    }
`;

export const OpenPortItem = styled.li`
    font-size: 17px;
    line-height: 1.5;
    word-wrap: normal;
    word-break: break-all;
    //color: #fff;
    color: greenyellow;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const SubdomainLink = styled.a`
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        scale: 1.1;
        color: greenyellow;
        text-decoration: underline;
    }
`;

export const CopyButtonSection = styled.div`
    display: flex;
    justify-content: flex-end;
`;
export const CopyButton = styled(MdContentCopy)`
    margin-left: 1rem;
    cursor: pointer;
    color: #ff8000;
    font-size: 1.5rem;
`;

export const DownloadButton = styled(CgSoftwareDownload)`
    margin-left: 1rem;
    cursor: pointer;
    color: #ff8000;
    font-size: 1.5rem;
`;

export const PortScannerContainer = styled.div`
    margin: 50px 0;
    width: 100%;
    max-width: 1000px;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #090909;
    border: 1px solid #1a1c1d;
    box-shadow: 0 0 100px 0 rgba(40, 110, 157, 0.2);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    padding: 25px 50px 50px 50px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;
