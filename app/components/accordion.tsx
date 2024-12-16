import React from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  name: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, name }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="collapse collapse-arrow bg-yellow-500 mb-4">
          <input type="radio" name={name} defaultChecked={index === 0} />
          <div className="collapse-title text-lg text-black font-semibold">
            {item.title}
          </div>
          <div className="collapse-content">
            <p className="text-black">{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
