import EmojisChild from "./Emoji-Child";

const EmojisParent = () => {
  const onEmojiSelected = (data) => {
    console.log("Data Parent: ", data);
  };

  return (
    <>
      <p>Parent</p>
      <EmojisChild onSelected={onEmojiSelected} />
    </>
  );
};

export default EmojisParent;
