export interface RelationshipDataProps {
  relationships: Array<{
    charKey: string;
    testimony: string;
  }>;
}

export interface CharacterDataProps {
  allImageDataJson: {
    nodes: Array<{
      comment: string;
      date: Date;
      fileName: string;
      filePaths: string[];
      id: string;
      key: string;
      mimeType: string;
      name: string;
      order: number;
      tags: Array<{
        color: string;
        key: string;
        name: string;
        type: string;
      }>;
    }>;
  };
}
