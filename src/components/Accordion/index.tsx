// import {
//   isKey,
//   join,
//   isRunningInBrowser,
//   Keys,
//   ThrottledEvents,
// } from '@util';
// import * as React from "react";
// import { useState, useEffect } from "react";

// import pickBy from 'lodash/pickBy';
// import { Component, h } from 'preact';
// import style from './style.sass';
// import DownArrowIcon from "@images/SVG/down_arrow.svg";
// import styled from "styled-components";
// import useWindowSize from '@util/screen';

// const AccordionIcon = styled.img< { expanded: boolean }>`
//   height: 24px;
//   width: 13px;
//   display: initial;
//   vertical-align: sub;
//   margin-right: 8px;
//   transition: transform 200ms ease-in-out;
//   ${props => props.expanded && `transform: rotate(-180deg);`}
// `;

// interface Props {
//   title: string;
//   anchor?: string;
//   toggle?: Function;
//   open?: boolean;
//   index?: any;
//   darkMode?: boolean;
// }

// interface State {
//   isOpen: boolean;
// }

// enum Child {
//   Header = 'Header',
//   Body = 'Body',
// }

// const Accordion = ({ primary }: Props) => {
//   const [expanded, setExpanded] = useState<boolean>(false);
//   const collapsableElement: HTMLDivElement;
//   const headerElement: HTMLDivElement;
//   const naturalHeight: number = null;
//   const { title, anchor, open, darkMode }: Props = this.props;
//   const { isOpen }: State = this.state;
//   const { width, height } = useWindowSize();
//   // Prevent attrs with falsy values from being attached
//   const sectionAttrs = pickBy({ class: style.accordion, id: anchor });

//   // shouldComponentUpdate(nextProps, { isOpen }: State) {
//   //   return (
//   //     nextProps.open !== this.props.open ||
//   //     isOpen !== this.state.isOpen ||
//   //     nextProps.darkMode !== this.props.darkMode
//   //   );
//   // }

//   // async componentDidUpdate() {
//   //   if (this.props.open !== this.state.isOpen) {
//   //     await this.setState({
//   //       isOpen: !this.state.isOpen,
//   //     });
//   //   }

//   //   const stateHeight = this.state.isOpen
//   //     ? this.collapsableElement.scrollHeight
//   //     : 0;
//   //   this.collapsableElement.style.maxHeight = stateHeight + 'px';
//   // }

//   /**
//    * Toggle visible state.
//    */
//   const toggle = () => {
//     setExpanded(!expanded);
//   }

//   /**
//    * Handles keyboard accessibility.
//    */
//   // onKeyPress(e: KeyboardEvent) {
//   //   if (isKey(e, Keys.Enter) || isKey(e, Keys.Space)) {
//   //     e.preventDefault();

//   //     this.toggle();

//   //     if (this.state.isOpen) {
//   //       this.collapsableElement.focus();
//   //     }
//   //   }
//   // }

//   /**
//    * Get default/open class based on the component and isOpen state.
//    * @return string
//    */
//   // getToggleClass(component): string {
//   //   const base = [style[`accordion${component}`]];
//   //   if (this.state.isOpen) {
//   //     base.push(style[`accordion${component}IsOpen`]);
//   //   }
//   //   return base.join(' ');
//   // }

//   /**
//    * Get the tabindex based on state.
//    * If not open, return -1 to prevent tabbing through hidden content.
//    */
//   const getTabIndex = ():number => expanded ? 0 : -1;

//   return (
//     <section {...sectionAttrs}>
//       <div
//         aria-controls={title}
//         aria-expanded={expanded}
//         // class={join(
//         //   this.getToggleClass(Child.Header),
//         //   darkMode && style.darkModeAccordion,
//         // )}
//         onClick={() => toggle()}
//         // onKeyPress={e => onKeyPress(e)}
//         // ref={div => (this.headerElement = div)}
//         role={`button`}
//         tabIndex={0}
//       >
//         <AccordionIcon src={DownArrowIcon} alt={"accordion icon"} expanded={expanded === item.label} />
//         <span>{title}</span>
//       </div>
//       <div
//         ref={div => (this.collapsableElement = div)}
//         class={`body--small ${join(
//           this.getToggleClass(Child.Body),
//           darkMode && style.darkModeAccordion,
//         )}`}
//         aria-hidden={!isOpen}
//       >
//         {this.props.children}
//       </div>
//     </section>
//   );
// }
