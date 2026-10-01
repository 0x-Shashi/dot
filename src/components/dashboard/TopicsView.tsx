import React from 'react';
import { TOPIC_NAMES } from '../../data/catalog';

interface TopicsViewProps {
  onSelectTopic: (topic: string) => void;
  selectedTopic?: string;
}

export const TopicsView: React.FC<TopicsViewProps> = ({ onSelectTopic, selectedTopic }) => {
  return (
    <section className="stack" id="v-topics" aria-label="Topics">
      <div className="bar">
        Topics <em id="tpCount">{TOPIC_NAMES.length}</em>
      </div>
      <div className="tiles st" id="tpGrid">
        {TOPIC_NAMES.map((n, i) => (
          <button
            key={n}
            className={`tile tp ${selectedTopic === n ? 'active' : ''}`}
            data-tp={n}
            onClick={() => onSelectTopic(n)}
          >
            <span className="tpt">
              <i className={`blk b${i % 4}`} />

            </span>
            <span className="tpn">{n}</span>
          </button>
        ))}
      </div>
      <div className="grow" />
    </section>
  );
};
