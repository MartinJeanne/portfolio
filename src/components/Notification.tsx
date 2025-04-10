import React, { useEffect, useMemo } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

interface NotificationCardProps {
  scrollTo: () => void;
}

const Context = React.createContext({ name: 'Default' });

export const Notification = ({ scrollTo }: NotificationCardProps) => {
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
          </div>
        ),
        placement: 'topRight',
        duration: null,
        onClick: () => scrollTo(),
        style: { cursor: 'pointer' },
      });
    }, 10000);

    return () => clearTimeout(timer);
  }, [api, scrollTo, t]);


  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
    </Context.Provider>
  );
};
