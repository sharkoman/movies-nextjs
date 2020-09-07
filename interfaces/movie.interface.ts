// Generated by https://quicktype.io

export interface Movie {
	id:           number;
	Name:         string;
	desc:         string;
	release_date: string;
	trailer_url:  string;
	created_by:   AtedBy;
	updated_by:   AtedBy;
	created_at:   string;
	updated_at:   string;
	poster:       Poster;
	actors:       Actor[];
}

export interface Actor {
	id:         number;
	name:       string;
	summery:    string;
	birth_date: string;
	created_by: number;
	updated_by: number;
	created_at: string;
	updated_at: string;
	image:      Image;
}

interface Image {
	id:                number;
	name:              string;
	alternativeText:   string;
	caption:           string;
	width:             number;
	height:            number;
	formats:           ImageFormats;
	hash:              string;
	ext:               string;
	mime:              string;
	size:              number;
	url:               string;
	previewUrl:        null;
	provider:          string;
	provider_metadata: null;
	created_by:        number;
	updated_by:        number;
	created_at:        string;
	updated_at:        string;
}

interface ImageFormats {
	thumbnail: Small;
	medium?:   Small;
	small?:    Small;
}

interface Small {
	name:   string;
	hash:   string;
	ext:    string;
	mime:   string;
	width:  number;
	height: number;
	size:   number;
	path:   null;
	url:    string;
}

interface AtedBy {
	id:        number;
	firstname: string;
	lastname:  string;
	username:  null;
}

interface Poster {
	id:                number;
	name:              string;
	alternativeText:   string;
	caption:           string;
	width:             number;
	height:            number;
	formats:           PosterFormats;
	hash:              string;
	ext:               string;
	mime:              string;
	size:              number;
	url:               string;
	previewUrl:        null;
	provider:          string;
	provider_metadata: null;
	created_by:        number;
	updated_by:        number;
	created_at:        string;
	updated_at:        string;
}

interface PosterFormats {
	thumbnail: Small;
	small:     Small;
}
