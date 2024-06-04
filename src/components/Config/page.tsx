import React, { useState } from 'react';
import { Modal, Button, Input, Switch, Select } from 'antd';

const { Option } = Select;

const ConfigModal = ({ visible, handleOk, handleCancel }) => {
    const [userName, setUserName] = useState("John Doe");
    const [email, setEmail] = useState("john.doe@example.com");
    const [notifications, setNotifications] = useState(true);
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("en");

    return (
        <Modal
            title="Configurações"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="cancel" onClick={handleCancel}>
                    Cancelar
                </Button>,
                <Button key="ok" type="primary" onClick={handleOk} className="bg-blue-500 hover:bg-blue-600 text-white">
                    OK
                </Button>,
            ]}
        >
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome de Usuário</label>
                    <Input value={userName} onChange={e => setUserName(e.target.value)} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <Input value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Notificações</span>
                    <Switch checked={notifications} onChange={setNotifications} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tema</label>
                    <Select value={theme} onChange={setTheme} className="w-full">
                        <Option value="light">Claro</Option>
                        <Option value="dark">Escuro</Option>
                    </Select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Idioma</label>
                    <Select value={language} onChange={setLanguage} className="w-full">
                        <Option value="en">Inglês</Option>
                        <Option value="pt">Português</Option>
                        <Option value="es">Espanhol</Option>
                    </Select>
                </div>
            </div>
        </Modal>
    );
}

export default ConfigModal;
