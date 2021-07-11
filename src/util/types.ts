export interface RelationshipDataProps {
  relationships: Array<{
    charKey: string;
    testimony: string;
  }>;
}

export interface imageDataProps {
  comment: string;
  date: Date;
  fileName: string;
  filePaths: string[];
  id: string;
  key: string;
  mimeType: string;
  name: string;
  order: number;
  tags: {
    color: string;
    key: string;
    name: string;
    type: string;
  }[];
}
