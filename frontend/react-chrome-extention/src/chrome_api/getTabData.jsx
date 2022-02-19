const getTabData = () => {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-undef,no-unused-vars
    var tabID;
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true }, (tabs) => {
      resolve(tabs[0]);
    });
  });
};

export default getTabData;
