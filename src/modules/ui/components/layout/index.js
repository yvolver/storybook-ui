import React from 'react';

import VSplit from './vsplit';
import HSplit from './hsplit';
import SplitPane from '@kadira/react-split-pane';

const rootStyle = {
  height: '100vh',
  backgroundColor: '#F7F7F7',
};

const fullScreenStyle = {
  height: '100vh',
  border: 0,
  margin: 0,
  padding: 0,
  overflow: 'hidden',
};

const leftPanelStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
};

const downPanelStyle = {
  display: 'flex',
  position: 'absolute',
  width: '100%',
  height: '100%',
  padding: '5px 10px 10px 0',
  boxSizing: 'border-box',
};

const contentPanelStyle = {
  position: 'absolute',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  padding: '10px 10px 10px 0',
};

const previewStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#FFF',
  border: '1px solid #ECECEC',
  borderRadius: 4,
};

const vsplit = <VSplit />;
const hsplit = <HSplit />;

const onDragStart = function () {
  document.body.classList.add('dragging');
};

const onDragEnd = function () {
  document.body.classList.remove('dragging');
};

class Layout extends React.Component {
  renderWithFullscreen() {
    return (
      <div className="preview-full" style={fullScreenStyle}>
        {this.props.preview()}
      </div>
    );
  }

  renderNormally() {
    const props = this.props;
    const leftPanelDefaultSize = props.showLeftPanel ? 250 : 1;
    let downPanelDefaultSize = 1;
    if (props.showDownPanel) {
      downPanelDefaultSize = props.downPanelInRight ? 400 : 200;
    }
    return (
      <div style={rootStyle}>
        <SplitPane
          split="vertical"
          minSize={leftPanelDefaultSize}
          defaultSize={leftPanelDefaultSize}
          resizerChildren={vsplit}
          onDragStarted={onDragStart}
          onDragFinished={onDragEnd}
        >
          <div className="left-panel" style={leftPanelStyle}>
            {props.showLeftPanel ? props.leftPanel() : null}
          </div>

          <SplitPane
            split={props.downPanelInRight ? 'vertical' : 'horizontal'}
            primary="second"
            minSize={props.downPanelInRight ? 200 : 100}
            defaultSize={downPanelDefaultSize}
            resizerChildren={props.downPanelInRight ? vsplit : hsplit}
            onDragStarted={onDragStart}
            onDragFinished={onDragEnd}
          >
            <div className="content-panel" style={contentPanelStyle}>
              <div className="preview" style={previewStyle}>
                {props.preview()}
              </div>
            </div>
            <div className="down-panel" style={downPanelStyle}>
              {props.showDownPanel ? props.downPanel() : null}
            </div>
          </SplitPane>
        </SplitPane>
      </div>
    );
  }

  render() {
    const { goFullScreen } = this.props;
    if (goFullScreen) {
      return this.renderWithFullscreen();
    }

    return this.renderNormally();
  }
}

Layout.propTypes = {
  showLeftPanel: React.PropTypes.bool.isRequired,
  showDownPanel: React.PropTypes.bool.isRequired,
  goFullScreen: React.PropTypes.bool.isRequired,
  leftPanel: React.PropTypes.func.isRequired,
  preview: React.PropTypes.func.isRequired,
  downPanel: React.PropTypes.func.isRequired,
  downPanelInRight: React.PropTypes.bool.isRequired,
};

export default Layout;
