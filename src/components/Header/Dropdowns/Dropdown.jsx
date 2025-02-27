import React from "react";
import {
    DropdownDesc,
    DropdownItem,
    DropdownContainer,
    DropdownRouterLink,
    DropdownItemContainer,
    DropdownItemsContainer,
    SideCloseIcon,
} from "./DropdownElements";

export default function Dropdown({ isOpen, toggle, closed, isResources, isLearn, closeSidebar }) {
    // const learn = [
    // { title: "Cyber Security Complete Course", to: "/learning-path", desc: "Learn everything about Cyber Security" },
    // { title: "Roadmap", to: "/roadmaps", desc: "Step by step guide to becoming a cybersecurity professional" },
    // ];

    const resources = [
        // { title: "Cyber Security Complete Course", to: "/learning-path", desc: "Learn everything about Cyber Security" },
        { title: "Roadmap", to: "/roadmaps", desc: "Guide to becoming a cybersecurity professional" },
        { title: "Interview Questions", to: "/interviewQuestions", desc: "Prepare for your interview" },
        { title: "Quiz", to: "/quiz", desc: "Test your knowledge" },
        { title: "Community", to: "/community", desc: "Join our community" },
        { title: "Events", to: "/events", desc: "Find Cybersecurity Events" },
        { title: "Support", to: "/support", desc: "Support us" },
        // {title: "News", to: "/cyberNews", desc: "Stay up to date with the latest news"},
    ];

    return (
        closed && (
            <DropdownContainer isOpen={isOpen}>
                <SideCloseIcon />
                <DropdownItemsContainer>
                    {/* {isLearn === true && */}
                    {/*    learn.map((i, id) => ( */}
                    {/*        <DropdownItemContainer key={id}> */}
                    {/*            <DropdownRouterLink to={i.to} onClick={() => toggle(false)}> */}
                    {/*                <DropdownItem> {i.title} </DropdownItem> */}
                    {/*                <DropdownDesc> {i.desc} </DropdownDesc> */}
                    {/*            </DropdownRouterLink> */}
                    {/*        </DropdownItemContainer> */}
                    {/*    ))} */}
                    {isResources === true &&
                        resources.map((i, id) => (
                            <DropdownItemContainer key={id}>
                                <DropdownRouterLink to={i.to} onClick={() => toggle(false)}>
                                    <DropdownItem> {i.title} </DropdownItem>
                                    <DropdownDesc> {i.desc} </DropdownDesc>
                                </DropdownRouterLink>
                            </DropdownItemContainer>
                        ))}
                </DropdownItemsContainer>
            </DropdownContainer>
        )
    );
}
