const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>This is dynamic page of id: {params.id}</h1>
    </div>
  );
};

export default DynamicPage;
