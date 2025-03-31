import React, { useEffect, useMemo } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

const Context = React.createContext({ name: 'Default' });

export const Notification: React.FC = () => {
  const { t } = useTranslation();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const timer = setTimeout(() => {
      api.info({
        icon: <SmileOutlined style={{ color: '#00aaff' }} />,
        message: t('notification.title'),
        description: (
          <div>
            {t('notification.content')}
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
  }, [api, t]);


  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
    </Context.Provider>
  );
};
