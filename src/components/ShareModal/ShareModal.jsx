// import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
import PostShareSection from '../PostShareSection/PostShareSection';

function ShareModal(props) {
//   const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        size='55%'
        opened={props.modalOpened}
        onClose={()=>props.setModalOpened(false)}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <PostShareSection/>
      </Modal>
    </>
  );
}

export default ShareModal