const BookSubmittedPage = () => {
  return (
    <main className="max-w-3xl mx-auto">
      <div className="flex flex-col mt-11 gap-2">
        <h1 className="text-3xl font-bold">Book submitted</h1>
        <p className="text-muted-foreground">
          Your book posting has been submitted and is pending approval.
        </p>
      </div>
    </main>
  );
};

export default BookSubmittedPage;
