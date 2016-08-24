import React from 'react';
import { baseFonts } from '../theme';

const listStyle = {
  ...baseFonts,
  marginTop: '20px',
};

const kindStyle = {
  borderTop: '1px solid #3a4048',
  color: '#e0e0e0',
  cursor: 'pointer',
  fontSize: 15,
  padding: '10px 15px',
};

const styleSelected = {
  background: '#363f49',
  color: '#fff',
  cursor: 'pointer',
  fontSize: 15,
  fontWeight: 'bold',
  padding: '10px 15px',
};

const styleStoryState = {
  // background: '#2a323d',
  borderLeft: '3px solid #363f49',
  color: '#e0e0e0',
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 'normal',
  margin: '0 10px',
  padding: '10px 0 10px 15px',
};

const styleStoryStateSelected = {
  ...styleStoryState,
  borderLeft: '3px solid #46e48d',
  color: '#46e48d',
  margin: '0 0 0 10px',
};

class Stories extends React.Component {
  constructor(...args) {
    super(...args);
    this.renderKind = this.renderKind.bind(this);
    this.renderStory = this.renderStory.bind(this);
  }

  fireOnKind(kind) {
    const { onSelectStory } = this.props;
    if (onSelectStory) onSelectStory(kind, null);
  }

  fireOnStory(story) {
    const { onSelectStory, selectedKind } = this.props;
    if (onSelectStory) onSelectStory(selectedKind, story);
  }

  renderStory(story) {
    const { selectedStory } = this.props;
    let style = styleStoryState;
    const props = {
      key: story,
      onClick: this.fireOnStory.bind(this, story),
    };

    if (story === selectedStory) {
      style = styleStoryStateSelected;
    }

    return (
      <div style={style} className="sb-story-container" {...props}>
        {story}
      </div>
    );
  }

  renderKind({ kind, stories }) {
    const { selectedKind } = this.props;
    const style = { ...kindStyle };

    if (kind === selectedKind) {
      return (
        <div key={kind}>
          <div
            className="sb-story--selected"
            style={styleSelected}
            onClick={this.fireOnKind.bind(this, kind)}
          >
            {kind}
          </div>
          <div className="sb-story-render">
            {stories.map(this.renderStory)}
          </div>
        </div>
      );
    }

    return (
      <div
        key={kind}
        style={style}
        onClick={this.fireOnKind.bind(this, kind, null)}
        className="sb-story--not-selected"
      >
        {kind}
      </div>
    );
  }

  render() {
    const { stories } = this.props;
    return (
      <div className="sb-stories-list" style={listStyle}>
        {stories.map(this.renderKind)}
      </div>
    );
  }
}

Stories.propTypes = {
  stories: React.PropTypes.array.isRequired,
  selectedKind: React.PropTypes.string.isRequired,
  selectedStory: React.PropTypes.string.isRequired,
  onSelectStory: React.PropTypes.func,
};

export default Stories;
