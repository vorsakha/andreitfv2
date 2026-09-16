type TopologyNode = Readonly<{
  name: string;
  role: string;
}>;

type TopologyNodes = Readonly<
  Record<
    'archWorkhorse' | 'macbook' | 'ubuntuServer' | 'apiModels',
    TopologyNode
  >
>;

type HomeServerTopologyProps = Readonly<{
  title: string;
  description: string;
  nodes: TopologyNodes;
}>;

export function HomeServerTopology({
  title,
  description,
  nodes,
}: HomeServerTopologyProps) {
  return (
    <figure className="home-server-topology" aria-labelledby="topology-caption">
      <svg
        className="home-server-topology__drawing"
        viewBox="0 0 460 220"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M78 110 H168 C196 110 196 62 224 62 H266" />
          <path d="M168 110 C196 110 196 158 224 158 H266" />
          <path
            d="M294 62 H320 C348 62 348 110 378 110"
            strokeDasharray="4 5"
          />
          <path
            d="M294 158 H320 C348 158 348 110 378 110"
            strokeDasharray="4 5"
          />
          <path d="M370 104 L380 110 L370 116" />
          <circle cx="56" cy="110" r="14" fill="var(--canvas)" />
          <circle cx="280" cy="62" r="14" fill="var(--canvas)" />
          <circle cx="280" cy="158" r="14" fill="var(--canvas)" />
          <circle cx="398" cy="110" r="14" fill="var(--canvas)" />
        </g>
        <text className="home-server-topology__node" x="280" y="28">
          <tspan className="home-server-topology__label" x="280">
            {nodes.archWorkhorse.name.toUpperCase()}
          </tspan>
          <tspan className="home-server-topology__role" x="280" dy="15">
            {nodes.archWorkhorse.role}
          </tspan>
        </text>
        <text className="home-server-topology__node" x="56" y="72">
          <tspan className="home-server-topology__label" x="56">
            {nodes.macbook.name.toUpperCase()}
          </tspan>
          <tspan className="home-server-topology__role" x="56" dy="15">
            {nodes.macbook.role}
          </tspan>
        </text>
        <text className="home-server-topology__node" x="280" y="185">
          <tspan className="home-server-topology__label" x="280">
            {nodes.ubuntuServer.name.toUpperCase()}
          </tspan>
          <tspan className="home-server-topology__role" x="280" dy="15">
            {nodes.ubuntuServer.role}
          </tspan>
        </text>
        <text className="home-server-topology__node" x="398" y="72">
          <tspan className="home-server-topology__label" x="398">
            {nodes.apiModels.name.toUpperCase()}
          </tspan>
          <tspan className="home-server-topology__role" x="398" dy="15">
            {nodes.apiModels.role}
          </tspan>
        </text>
      </svg>
      <figcaption id="topology-caption">
        <span className="home-server-topology__caption-title">{title}</span>
        <span>{description}</span>
      </figcaption>
    </figure>
  );
}
