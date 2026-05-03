interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}

interface AppleWatch {
  heartRate: string;
  stopWatch: boolean;
  callSupport: boolean;
  aiFeatured: boolean;
}

interface NonBrandWatch {
  heartRate: string;
  stopWatch: boolean;
}

const poorDeveloper: Developer<
  NonBrandWatch,
  { brand: "yeamaha"; engineCapacity: "200cc" }
> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenevo",
    model: "A21",
    releasedYear: 2010,
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
};

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "Hp",
    model: "ex",
    releasedYear: 2020,
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
    callSupport: true,
    aiFeatured: true,
  },
};
