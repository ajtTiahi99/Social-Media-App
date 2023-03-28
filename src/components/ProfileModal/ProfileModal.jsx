// import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal(props) {
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
        <form className="infoForm">
            <h3>Your Info</h3>
            <div>
                <input type="text" name="name" className="infoInput" placeholder="Name" />
                <input type="text" name="worksAt" className="infoInput" placeholder="Works At" />
                <input type="text" name="liveIn" className="infoInput" placeholder="Lives In" />
                <input type="text" name="country" className="infoInput" placeholder="Country" />
                <div>
                  Profile Image
                  <input type="file" name="profileImg" style={{}}/>
                  Cover Image
                  <input type="file" name="profileImg" style={{}}/>
                </div>
                <button className="button infoBtn">Update</button>
            </div>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal