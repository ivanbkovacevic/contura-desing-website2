export interface Accordion {
  title: string;
  content: string | JSX.Element;
}

export const DESIGN_STRATEGY_LIST: Accordion[] = [
  {
    title: "Digital Strategy",
    content: (
      <div>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsam earum rem natus, fugiat explicabo, error accusantium, molestias
          consequuntur blanditiis repudiandae nam odit possimus. Temporibus
          eveniet nesciunt laboriosam sint est voluptatibus cum possimus,
          laudantium autem esse animi! Quibusdam ipsum libero eos repellat
          excepturi, rem eum, eveniet labore odit quas accusantium.",
        </p>
      </div>
    ),
  },
  {
    title: "Branding",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam earum rem natus, fugiat explicabo, error accusantium, molestias consequuntur blanditiis repudiandae nam odit possimus. Temporibus eveniet nesciunt laboriosam sint est voluptatibus cum possimus, laudantium autem esse animi! Quibusdam ipsum libero eos repellat excepturi, rem eum, eveniet labore odit quas accusantium.",
  },
  {
    title: "User Experience",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam earum rem natus, fugiat explicabo, error accusantium, molestias consequuntur blanditiis repudiandae nam odit possimus. Temporibus eveniet nesciunt laboriosam sint est voluptatibus cum possimus, laudantium autem esse animi! Quibusdam ipsum libero eos repellat excepturi, rem eum, eveniet labore odit quas accusantium.",
  },
  {
    title: "Web Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam earum rem natus, fugiat explicabo, error accusantium, molestias consequuntur blanditiis repudiandae nam odit possimus. Temporibus eveniet nesciunt laboriosam sint est voluptatibus cum possimus, laudantium autem esse animi! Quibusdam ipsum libero eos repellat excepturi, rem eum, eveniet labore odit quas accusantium.",
  },
  {
    title: "Enterprise UX",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam earum rem natus, fugiat explicabo, error accusantium, molestias consequuntur blanditiis repudiandae nam odit possimus. Temporibus eveniet nesciunt laboriosam sint est voluptatibus cum possimus, laudantium autem esse animi! Quibusdam ipsum libero eos repellat excepturi, rem eum, eveniet labore odit quas accusantium.",
  },
];
