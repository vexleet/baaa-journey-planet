import PropTypes from 'prop-types';
import { Children } from 'react';
import './index.styles.css';
import TabPanel from '@/src/components/Tabs/TabPanel.jsx';
import Tab from '@/src/components/Tabs/Tab.jsx';

const Tabs = ({ children, className, tabsClassName, value, tabsPanelClassName, onChange }) => {
  const tabIsSelected = (tabValue) => {
    return value === tabValue;
  };

  const getActiveClassForTab = (tabValue) => {
    return tabIsSelected(tabValue) ? 'selected-tab' : '';
  };

  const mapTabs = (child) => {
    const { value } = child.props;

    return (
      <div className={getActiveClassForTab(value)} onClick={() => onChange(value)}>
        {child}
      </div>
    );
  };

  const mapTabPanels = (child) => {
    const { value: propValue } = child.props;

    return propValue === value ? child : null;
  };

  const tabsComponents = Children.map(children, (child) => {
    return child.props.label ? mapTabs(child) : null;
  });

  const tabPanelComponents = Children.map(children, (child) =>
    !child.props.label ? mapTabPanels(child) : null
  );

  return (
    <div className={className}>
      <div className={'tabs ' + tabsClassName}>{tabsComponents}</div>
      <div className={tabsPanelClassName}>{tabPanelComponents}</div>
    </div>
  );
};

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

Tabs.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.instanceOf(Tab), PropTypes.instanceOf(TabPanel)])
  ),
  className: PropTypes.string,
  tabsClassName: PropTypes.string,
  tabsPanelClassName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
};

export default Tabs;
