// SocialIcons.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

const SocialIcons: React.FC = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </div>
  );
};

export default SocialIcons;
