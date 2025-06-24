interface NotificationProps {
    message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
    return (
        <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green text-white px-4 py-2 shadow-lg transition-opacity duration-300 z-[9999]"
        >
            {message}
        </div>
    );
};


export default Notification;