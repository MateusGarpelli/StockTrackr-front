import { Modal, Button, Input, Upload, message } from 'antd';
import { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const Config = ({ visible, handleOk, handleCancel }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [bio, setBio] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    const handleSave = async () => {
        message.success('Configurações salvas com sucesso!');
    };

    

    return (
        <Modal
            title="Configurações"
            visible={visible}
            onOk={handleSave}
            onCancel={handleCancel}
            footer={[
                <Button key="cancel" onClick={handleCancel} >
                    Cancelar
                </Button>,
                <Button key="save" type="primary" onClick={handleSave} style={{ backgroundColor: '#34b3e2', borderColor: '#34b3e2', display:""} }>
                    Salvar
                </Button>,
            ]}
        >
            <div className="space-y-4">
                <div>
                    <h3>Configurações da Conta</h3>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-2"
                    />
                    <Input.Password
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-2"
                    />
                </div>
                <div>
                    <h3>Configurações de Perfil</h3>
                    <Input
                        placeholder="Nome de Exibição"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="mb-2"
                    />
                    <Input.TextArea
                        placeholder="Bio/Descrição"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="mb-2"
                    />
                    <Upload
                        name="profileImage"
                        action="URL_PARA_UPLOAD"
                        listType="picture"
                    >
                        <Button icon={<UploadOutlined />}>Upload Foto do Perfil</Button>
                    </Upload>
                </div>
            </div>
        </Modal>
    );
};

export default Config;
