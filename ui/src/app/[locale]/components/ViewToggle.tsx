import { TbBrandPython } from 'react-icons/tb';
import { PiBracketsCurly } from 'react-icons/pi';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useTranslations } from 'next-intl';
import { GoHome } from 'react-icons/go';

type modeType = 'main' | 'flow' | 'json' | 'python';

const ViewToggle = ({
  mode,
  setMode,
}: {
  mode: modeType;
  setMode: (mode: modeType) => void;
}) => {
  const t = useTranslations('component.ViewToggle');
  const ModeIcon =
    mode === 'flow'
      ? GoHome
      : mode === 'json'
      ? PiBracketsCurly
      : TbBrandPython;
  const tip =
    mode === 'flow' ? t('back-to-editor') : mode === 'json' ? 'JSON' : 'Python';

  return (
    <div
      className="btn btn-square btn-ghost btn-sm"
      onClick={() => setMode(mode)}
      data-tooltip-id="default-tooltip"
      data-tooltip-content={tip}
    >
      <ModeIcon className="w-4 h-4" />
    </div>
  );
};

export default ViewToggle;
