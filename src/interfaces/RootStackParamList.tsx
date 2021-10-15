export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
