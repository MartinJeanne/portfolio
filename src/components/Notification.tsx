import React, { useEffect, useMemo } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';

const Context = React.createContext({ name: 'Default' });

export const Notification: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const timer = setTimeout(() => {

      api.info({
        icon: <SmileOutlined style={{ color: '#00aaff' }} />,
        message: `Ça vous plait ?`,
        description: (
          <div>
            N'hésitez-pas à m'envoyer un message !
            <p style={{ color: 'blue', textDecoration: 'underline' }}>martinjeanne.dev@gmail.com</p>
          </div>
        ),
        placement: 'topRight',
        duration: null,
        //onClick: () => window.location.href = 'mailto:martinjeanne.dev@gmail.com?subject=Prise de contact&body=Bonjour Martin',
        //style: { cursor: 'pointer' },
      });
    }, 10000);

    return () => clearTimeout(timer);
  }, [api]);


  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
    </Context.Provider>
  );
};
