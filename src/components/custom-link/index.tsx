import React from 'react';

export interface ILinkRawData {
  href: string;
  title: string;
  desc: string;
  link: string;
  heroImg: string;
}

function CustomLink(props: ILinkRawData) {
  return (
    <a href={props.href} className="external-link-preview">
      <section className="elp-content-holder">
        <div className="elp-description-holder">
          <h4 className="elp-title">{props.title}</h4>
          <div className="elp-description">{props.desc}</div>
          <div className="elp-link">{props.link}</div>
        </div>
        <div className="elp-image-holder">
          <img src={props.heroImg} />
        </div>
      </section>
    </a>
  );
}

export default CustomLink;
