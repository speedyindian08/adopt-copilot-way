export const TrustedByIndustryLeaders = () => {
  const clients = [
    { name: "ARC", id: "arc" },
    { name: "Prezent", id: "prezent" },
    { name: "SOTC", id: "sotc" },
    { name: "BP", id: "bp" },
    { name: "Yellow", id: "yellow" },
    { name: "Emblem", id: "emblem" },
    { name: "Jiffy", id: "jiffy" },
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Trusted By Industry Leaders
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center w-full h-24 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md p-6"
            >
              <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
