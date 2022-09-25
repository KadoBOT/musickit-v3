/* tslint:disable */
/* eslint-disable */
/**
 * A resource object that represents an activity curator.
 * @export
 * @interface Activities
 */
declare namespace MusicKitAPI {
	export interface Activities {
		/**
		 * 
		 * @type {string}
		 * @memberof Activities
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Activities
		 */
		type: ActivitiesTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof Activities
		 */
		href: string;
		/**
		 * 
		 * @type {ActivitiesAttributes}
		 * @memberof Activities
		 */
		attributes?: ActivitiesAttributes;
		/**
		 * 
		 * @type {ActivitiesRelationships}
		 * @memberof Activities
		 */
		relationships?: ActivitiesRelationships;
	}


	/**
	 * @export
	 */
	export const ActivitiesTypeEnum = {
		Activities: 'activities'
	} as const;
	export type ActivitiesTypeEnum = typeof ActivitiesTypeEnum[keyof typeof ActivitiesTypeEnum];

	/**
	 * The attributes for an activities resource.
	 * @export
	 * @interface ActivitiesAttributes
	 */
	export interface ActivitiesAttributes {
		/**
		 * 
		 * @type {Artwork}
		 * @memberof ActivitiesAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {EditorialNotes}
		 * @memberof ActivitiesAttributes
		 */
		editorialNotes?: EditorialNotes;
		/**
		 * 
		 * @type {string}
		 * @memberof ActivitiesAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ActivitiesAttributes
		 */
		url: string;
	}
	/**
	 * The relationships for an activity resource.
	 * @export
	 * @interface ActivitiesRelationships
	 */
	export interface ActivitiesRelationships {
		/**
		 * 
		 * @type {ActivitiesRelationshipsActivitiesPlaylistsRelationship}
		 * @memberof ActivitiesRelationships
		 */
		playlists?: ActivitiesRelationshipsActivitiesPlaylistsRelationship;
	}
	/**
	 * A relationship between the activity and its playlists.
	 * @export
	 * @interface ActivitiesRelationshipsActivitiesPlaylistsRelationship
	 */
	export interface ActivitiesRelationshipsActivitiesPlaylistsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof ActivitiesRelationshipsActivitiesPlaylistsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ActivitiesRelationshipsActivitiesPlaylistsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof ActivitiesRelationshipsActivitiesPlaylistsRelationship
		 */
		data: Array<Playlists>;
	}
	/**
	 * The response to a request for activities.
	 * @export
	 * @interface ActivitiesResponse
	 */
	export interface ActivitiesResponse {
		/**
		 * 
		 * @type {Array<Activities>}
		 * @memberof ActivitiesResponse
		 */
		data: Array<Activities>;
	}
	/**
	 * A resource object that represents an album.
	 * @export
	 * @interface Albums
	 */
	export interface Albums {
		/**
		 * 
		 * @type {string}
		 * @memberof Albums
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Albums
		 */
		type: AlbumsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof Albums
		 */
		href: string;
		/**
		 * 
		 * @type {AlbumsAttributes}
		 * @memberof Albums
		 */
		attributes?: AlbumsAttributes;
		/**
		 * 
		 * @type {AlbumsRelationships}
		 * @memberof Albums
		 */
		relationships?: AlbumsRelationships;
		/**
		 * 
		 * @type {AlbumsViews}
		 * @memberof Albums
		 */
		views?: AlbumsViews;
	}


	/**
	 * @export
	 */
	export const AlbumsTypeEnum = {
		Albums: 'albums'
	} as const;
	export type AlbumsTypeEnum = typeof AlbumsTypeEnum[keyof typeof AlbumsTypeEnum];

	/**
	 * The attributes for an album resource.
	 * @export
	 * @interface AlbumsAttributes
	 */
	export interface AlbumsAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsAttributes
		 */
		artistName: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsAttributes
		 */
		artistUrl?: string;
		/**
		 * 
		 * @type {Artwork}
		 * @memberof AlbumsAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof AlbumsAttributes
		 */
		audioVariants?: Array<string>;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsAttributes
		 */
		contentRating?: AlbumsAttributesContentRatingEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsAttributes
		 */
		copyright?: string;
		/**
		 * 
		 * @type {EditorialNotes}
		 * @memberof AlbumsAttributes
		 */
		editorialNotes?: EditorialNotes;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof AlbumsAttributes
		 */
		genreNames: Array<string>;
		/**
		 * 
		 * @type {boolean}
		 * @memberof AlbumsAttributes
		 */
		isCompilation: boolean;
		/**
		 * 
		 * @type {boolean}
		 * @memberof AlbumsAttributes
		 */
		isComplete: boolean;
		/**
		 * 
		 * @type {boolean}
		 * @memberof AlbumsAttributes
		 */
		isMasteredForItunes: boolean;
		/**
		 * 
		 * @type {boolean}
		 * @memberof AlbumsAttributes
		 */
		isSingle: boolean;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {PlayParameters}
		 * @memberof AlbumsAttributes
		 */
		playParams?: PlayParameters;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsAttributes
		 */
		recordLabel?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsAttributes
		 */
		releaseDate?: string;
		/**
		 * 
		 * @type {number}
		 * @memberof AlbumsAttributes
		 */
		trackCount: number;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsAttributes
		 */
		upc?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsAttributes
		 */
		url: string;
	}


	/**
	 * @export
	 */
	export const AlbumsAttributesContentRatingEnum = {
		Clean: 'clean',
		Explicit: 'explicit'
	} as const;
	export type AlbumsAttributesContentRatingEnum = typeof AlbumsAttributesContentRatingEnum[keyof typeof AlbumsAttributesContentRatingEnum];

	/**
	 * The relationships for an album resource.
	 * @export
	 * @interface AlbumsRelationships
	 */
	export interface AlbumsRelationships {
		/**
		 * 
		 * @type {AlbumsRelationshipsAlbumsArtistsRelationship}
		 * @memberof AlbumsRelationships
		 */
		artists?: AlbumsRelationshipsAlbumsArtistsRelationship;
		/**
		 * 
		 * @type {AlbumsRelationshipsAlbumsGenresRelationship}
		 * @memberof AlbumsRelationships
		 */
		genres?: AlbumsRelationshipsAlbumsGenresRelationship;
		/**
		 * 
		 * @type {AlbumsRelationshipsAlbumsTracksRelationship}
		 * @memberof AlbumsRelationships
		 */
		tracks?: AlbumsRelationshipsAlbumsTracksRelationship;
		/**
		 * 
		 * @type {AlbumsRelationshipsAlbumsLibraryRelationship}
		 * @memberof AlbumsRelationships
		 */
		library?: AlbumsRelationshipsAlbumsLibraryRelationship;
		/**
		 * 
		 * @type {AlbumsRelationshipsAlbumsRecordLabelsRelationship}
		 * @memberof AlbumsRelationships
		 */
		recordLabels?: AlbumsRelationshipsAlbumsRecordLabelsRelationship;
	}
	/**
	 * A relationship from the album to its artists.
	 * @export
	 * @interface AlbumsRelationshipsAlbumsArtistsRelationship
	 */
	export interface AlbumsRelationshipsAlbumsArtistsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsRelationshipsAlbumsArtistsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsRelationshipsAlbumsArtistsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Artists>}
		 * @memberof AlbumsRelationshipsAlbumsArtistsRelationship
		 */
		data: Array<Artists>;
	}
	/**
	 * A relationship from the album to its genres. 
	 * @export
	 * @interface AlbumsRelationshipsAlbumsGenresRelationship
	 */
	export interface AlbumsRelationshipsAlbumsGenresRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsRelationshipsAlbumsGenresRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsRelationshipsAlbumsGenresRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Genres>}
		 * @memberof AlbumsRelationshipsAlbumsGenresRelationship
		 */
		data: Array<Genres>;
	}
	/**
	 * A relationship from the album to an associated library album.
	 * @export
	 * @interface AlbumsRelationshipsAlbumsLibraryRelationship
	 */
	export interface AlbumsRelationshipsAlbumsLibraryRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsRelationshipsAlbumsLibraryRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsRelationshipsAlbumsLibraryRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryAlbums>}
		 * @memberof AlbumsRelationshipsAlbumsLibraryRelationship
		 */
		data: Array<LibraryAlbums>;
	}
	/**
	 * A relationship from the album to its associated record label.
	 * @export
	 * @interface AlbumsRelationshipsAlbumsRecordLabelsRelationship
	 */
	export interface AlbumsRelationshipsAlbumsRecordLabelsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsRelationshipsAlbumsRecordLabelsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsRelationshipsAlbumsRecordLabelsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<RecordLabels>}
		 * @memberof AlbumsRelationshipsAlbumsRecordLabelsRelationship
		 */
		data: Array<RecordLabels>;
	}
	/**
	 * A relationship from the album to its tracks.
	 * @export
	 * @interface AlbumsRelationshipsAlbumsTracksRelationship
	 */
	export interface AlbumsRelationshipsAlbumsTracksRelationship {
		/**
		 * 
		 * @type {Array<PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner>}
		 * @memberof AlbumsRelationshipsAlbumsTracksRelationship
		 */
		data: Array<PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner>;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsRelationshipsAlbumsTracksRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsRelationshipsAlbumsTracksRelationship
		 */
		next?: string;
	}
	/**
	 * The response to an albums request.
	 * @export
	 * @interface AlbumsResponse
	 */
	export interface AlbumsResponse {
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof AlbumsResponse
		 */
		data: Array<Albums>;
	}
	/**
	 * The relationship views for an album resource.
	 * @export
	 * @interface AlbumsViews
	 */
	export interface AlbumsViews {
		/**
		 * 
		 * @type {AlbumsViewsAlbumsAppearsOnView}
		 * @memberof AlbumsViews
		 */
		appearsOn?: AlbumsViewsAlbumsAppearsOnView;
		/**
		 * 
		 * @type {AlbumsViewsAlbumsOtherVersionsView}
		 * @memberof AlbumsViews
		 */
		otherVersions?: AlbumsViewsAlbumsOtherVersionsView;
		/**
		 * 
		 * @type {AlbumsViewsAlbumsRelatedAlbumsView}
		 * @memberof AlbumsViews
		 */
		relatedAlbums?: AlbumsViewsAlbumsRelatedAlbumsView;
		/**
		 * 
		 * @type {AlbumsViewsAlbumsRelatedVideosView}
		 * @memberof AlbumsViews
		 */
		relatedVideos?: AlbumsViewsAlbumsRelatedVideosView;
	}
	/**
	 * A relationship view from this album to a selection of playlists tracks from this album appear on.
	 * @export
	 * @interface AlbumsViewsAlbumsAppearsOnView
	 */
	export interface AlbumsViewsAlbumsAppearsOnView {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsAppearsOnView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsAppearsOnView
		 */
		next?: string;
		/**
		 * 
		 * @type {AlbumsViewsAlbumsAppearsOnViewAttributes}
		 * @memberof AlbumsViewsAlbumsAppearsOnView
		 */
		attributes: AlbumsViewsAlbumsAppearsOnViewAttributes;
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof AlbumsViewsAlbumsAppearsOnView
		 */
		data: Array<Playlists>;
	}
	/**
	 * The attributes for the view.
	 * @export
	 * @interface AlbumsViewsAlbumsAppearsOnViewAttributes
	 */
	export interface AlbumsViewsAlbumsAppearsOnViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsAppearsOnViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view for other versions of this album.
	 * @export
	 * @interface AlbumsViewsAlbumsOtherVersionsView
	 */
	export interface AlbumsViewsAlbumsOtherVersionsView {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsOtherVersionsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsOtherVersionsView
		 */
		next?: string;
		/**
		 * 
		 * @type {AlbumsViewsAlbumsOtherVersionsViewAttributes}
		 * @memberof AlbumsViewsAlbumsOtherVersionsView
		 */
		attributes: AlbumsViewsAlbumsOtherVersionsViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof AlbumsViewsAlbumsOtherVersionsView
		 */
		data: Array<Albums>;
	}
	/**
	 * The attributes for the view.
	 * @export
	 * @interface AlbumsViewsAlbumsOtherVersionsViewAttributes
	 */
	export interface AlbumsViewsAlbumsOtherVersionsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsOtherVersionsViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this album to related and similar albums.
	 * @export
	 * @interface AlbumsViewsAlbumsRelatedAlbumsView
	 */
	export interface AlbumsViewsAlbumsRelatedAlbumsView {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsRelatedAlbumsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsRelatedAlbumsView
		 */
		next?: string;
		/**
		 * 
		 * @type {AlbumsViewsAlbumsRelatedAlbumsViewAttributes}
		 * @memberof AlbumsViewsAlbumsRelatedAlbumsView
		 */
		attributes: AlbumsViewsAlbumsRelatedAlbumsViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof AlbumsViewsAlbumsRelatedAlbumsView
		 */
		data: Array<Albums>;
	}
	/**
	 * The attributes for the view.
	 * @export
	 * @interface AlbumsViewsAlbumsRelatedAlbumsViewAttributes
	 */
	export interface AlbumsViewsAlbumsRelatedAlbumsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsRelatedAlbumsViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this album to music videos for the songs on the album.
	 * @export
	 * @interface AlbumsViewsAlbumsRelatedVideosView
	 */
	export interface AlbumsViewsAlbumsRelatedVideosView {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsRelatedVideosView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsRelatedVideosView
		 */
		next?: string;
		/**
		 * 
		 * @type {AlbumsViewsAlbumsRelatedVideosViewAttributes}
		 * @memberof AlbumsViewsAlbumsRelatedVideosView
		 */
		attributes: AlbumsViewsAlbumsRelatedVideosViewAttributes;
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof AlbumsViewsAlbumsRelatedVideosView
		 */
		data: Array<MusicVideos>;
	}
	/**
	 * The attributes for the view.
	 * @export
	 * @interface AlbumsViewsAlbumsRelatedVideosViewAttributes
	 */
	export interface AlbumsViewsAlbumsRelatedVideosViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof AlbumsViewsAlbumsRelatedVideosViewAttributes
		 */
		title: string;
	}
	/**
	 * A resource object that represents an Apple curator.
	 * @export
	 * @interface AppleCurators
	 */
	export interface AppleCurators {
		/**
		 * 
		 * @type {string}
		 * @memberof AppleCurators
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AppleCurators
		 */
		type: AppleCuratorsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof AppleCurators
		 */
		href: string;
		/**
		 * 
		 * @type {AppleCuratorsAttributes}
		 * @memberof AppleCurators
		 */
		attributes?: AppleCuratorsAttributes;
		/**
		 * 
		 * @type {AppleCuratorsRelationships}
		 * @memberof AppleCurators
		 */
		relationships?: AppleCuratorsRelationships;
	}


	/**
	 * @export
	 */
	export const AppleCuratorsTypeEnum = {
		AppleCurators: 'apple-curators'
	} as const;
	export type AppleCuratorsTypeEnum = typeof AppleCuratorsTypeEnum[keyof typeof AppleCuratorsTypeEnum];

	/**
	 * The attributes for an Apple curator resource.
	 * @export
	 * @interface AppleCuratorsAttributes
	 */
	export interface AppleCuratorsAttributes {
		/**
		 * 
		 * @type {Artwork}
		 * @memberof AppleCuratorsAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {EditorialNotes}
		 * @memberof AppleCuratorsAttributes
		 */
		editorialNotes?: EditorialNotes;
		/**
		 * 
		 * @type {string}
		 * @memberof AppleCuratorsAttributes
		 */
		kind: AppleCuratorsAttributesKindEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof AppleCuratorsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AppleCuratorsAttributes
		 */
		shortName?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AppleCuratorsAttributes
		 */
		showHostName?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AppleCuratorsAttributes
		 */
		url: string;
	}


	/**
	 * @export
	 */
	export const AppleCuratorsAttributesKindEnum = {
		Curator: 'Curator',
		Genre: 'Genre',
		Show: 'Show'
	} as const;
	export type AppleCuratorsAttributesKindEnum = typeof AppleCuratorsAttributesKindEnum[keyof typeof AppleCuratorsAttributesKindEnum];

	/**
	 * The relationships for an Apple curator resource.
	 * @export
	 * @interface AppleCuratorsRelationships
	 */
	export interface AppleCuratorsRelationships {
		/**
		 * 
		 * @type {AppleCuratorsRelationshipsAppleCuratorsPlaylistsRelationship}
		 * @memberof AppleCuratorsRelationships
		 */
		playlists?: AppleCuratorsRelationshipsAppleCuratorsPlaylistsRelationship;
	}
	/**
	 * A relationship from the Apple curator to its playlists.
	 * @export
	 * @interface AppleCuratorsRelationshipsAppleCuratorsPlaylistsRelationship
	 */
	export interface AppleCuratorsRelationshipsAppleCuratorsPlaylistsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof AppleCuratorsRelationshipsAppleCuratorsPlaylistsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof AppleCuratorsRelationshipsAppleCuratorsPlaylistsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof AppleCuratorsRelationshipsAppleCuratorsPlaylistsRelationship
		 */
		data: Array<Playlists>;
	}
	/**
	 * The response to a request for Apple curators.
	 * @export
	 * @interface AppleCuratorsResponse
	 */
	export interface AppleCuratorsResponse {
		/**
		 * 
		 * @type {Array<AppleCurators>}
		 * @memberof AppleCuratorsResponse
		 */
		data: Array<AppleCurators>;
	}
	/**
	 * A resource object that represents the artist of an album where an artist can be one or more people.
	 * @export
	 * @interface Artists
	 */
	export interface Artists {
		/**
		 * 
		 * @type {string}
		 * @memberof Artists
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Artists
		 */
		type: ArtistsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof Artists
		 */
		href: string;
		/**
		 * 
		 * @type {ArtistsAttributes}
		 * @memberof Artists
		 */
		attributes?: ArtistsAttributes;
		/**
		 * 
		 * @type {ArtistsRelationships}
		 * @memberof Artists
		 */
		relationships?: ArtistsRelationships;
		/**
		 * 
		 * @type {ArtistsViews}
		 * @memberof Artists
		 */
		views?: ArtistsViews;
	}


	/**
	 * @export
	 */
	export const ArtistsTypeEnum = {
		Artists: 'artists'
	} as const;
	export type ArtistsTypeEnum = typeof ArtistsTypeEnum[keyof typeof ArtistsTypeEnum];

	/**
	 * The attributes for an artist resource.
	 * @export
	 * @interface ArtistsAttributes
	 */
	export interface ArtistsAttributes {
		/**
		 * 
		 * @type {Artwork}
		 * @memberof ArtistsAttributes
		 */
		artwork?: Artwork;
		/**
		 * 
		 * @type {EditorialNotes}
		 * @memberof ArtistsAttributes
		 */
		editorialNotes?: EditorialNotes;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof ArtistsAttributes
		 */
		genreNames: Array<string>;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsAttributes
		 */
		url: string;
	}
	/**
	 * The relationships for an artist resource.
	 * @export
	 * @interface ArtistsRelationships
	 */
	export interface ArtistsRelationships {
		/**
		 * 
		 * @type {ArtistsRelationshipsArtistsAlbumsRelationship}
		 * @memberof ArtistsRelationships
		 */
		albums?: ArtistsRelationshipsArtistsAlbumsRelationship;
		/**
		 * 
		 * @type {ArtistsRelationshipsArtistsGenresRelationship}
		 * @memberof ArtistsRelationships
		 */
		genres?: ArtistsRelationshipsArtistsGenresRelationship;
		/**
		 * 
		 * @type {ArtistsRelationshipsArtistsMusicVideosRelationship}
		 * @memberof ArtistsRelationships
		 */
		musicVideos?: ArtistsRelationshipsArtistsMusicVideosRelationship;
		/**
		 * 
		 * @type {ArtistsRelationshipsArtistsPlaylistsRelationship}
		 * @memberof ArtistsRelationships
		 */
		playlists?: ArtistsRelationshipsArtistsPlaylistsRelationship;
		/**
		 * 
		 * @type {ArtistsRelationshipsArtistsStationRelationship}
		 * @memberof ArtistsRelationships
		 */
		station?: ArtistsRelationshipsArtistsStationRelationship;
	}
	/**
	 * A relationship from the artist to its albums.
	 * @export
	 * @interface ArtistsRelationshipsArtistsAlbumsRelationship
	 */
	export interface ArtistsRelationshipsArtistsAlbumsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsRelationshipsArtistsAlbumsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsRelationshipsArtistsAlbumsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof ArtistsRelationshipsArtistsAlbumsRelationship
		 */
		data: Array<Albums>;
	}
	/**
	 * A relationship from the artist to its genres.
	 * @export
	 * @interface ArtistsRelationshipsArtistsGenresRelationship
	 */
	export interface ArtistsRelationshipsArtistsGenresRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsRelationshipsArtistsGenresRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsRelationshipsArtistsGenresRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Genres>}
		 * @memberof ArtistsRelationshipsArtistsGenresRelationship
		 */
		data: Array<Genres>;
	}
	/**
	 * A relationship from the artist to its music videos.
	 * @export
	 * @interface ArtistsRelationshipsArtistsMusicVideosRelationship
	 */
	export interface ArtistsRelationshipsArtistsMusicVideosRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsRelationshipsArtistsMusicVideosRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsRelationshipsArtistsMusicVideosRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof ArtistsRelationshipsArtistsMusicVideosRelationship
		 */
		data: Array<MusicVideos>;
	}
	/**
	 * A relationship from the artist to its playlists.
	 * @export
	 * @interface ArtistsRelationshipsArtistsPlaylistsRelationship
	 */
	export interface ArtistsRelationshipsArtistsPlaylistsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsRelationshipsArtistsPlaylistsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsRelationshipsArtistsPlaylistsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof ArtistsRelationshipsArtistsPlaylistsRelationship
		 */
		data: Array<Playlists>;
	}
	/**
	 * A relationship from the artist to its station.
	 * @export
	 * @interface ArtistsRelationshipsArtistsStationRelationship
	 */
	export interface ArtistsRelationshipsArtistsStationRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsRelationshipsArtistsStationRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsRelationshipsArtistsStationRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Stations>}
		 * @memberof ArtistsRelationshipsArtistsStationRelationship
		 */
		data: Array<Stations>;
	}
	/**
	 * The response to an artists request.
	 * @export
	 * @interface ArtistsResponse
	 */
	export interface ArtistsResponse {
		/**
		 * 
		 * @type {Array<Artists>}
		 * @memberof ArtistsResponse
		 */
		data: Array<Artists>;
	}
	/**
	 * The views for associations between artists and other resources.
	 * @export
	 * @interface ArtistsViews
	 */
	export interface ArtistsViews {
		/**
		 * 
		 * @type {ArtistsViewsArtistsAppearsOnAlbumsView}
		 * @memberof ArtistsViews
		 */
		appearsOnAlbums?: ArtistsViewsArtistsAppearsOnAlbumsView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsCompilationAlbumsView}
		 * @memberof ArtistsViews
		 */
		compilationAlbums?: ArtistsViewsArtistsCompilationAlbumsView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsFeaturedAlbumsView}
		 * @memberof ArtistsViews
		 */
		featuredAlbums?: ArtistsViewsArtistsFeaturedAlbumsView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsFeaturedMusicVideosView}
		 * @memberof ArtistsViews
		 */
		featuredMusicVideos?: ArtistsViewsArtistsFeaturedMusicVideosView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsFeaturedPlaylistsView}
		 * @memberof ArtistsViews
		 */
		featuredPlaylists?: ArtistsViewsArtistsFeaturedPlaylistsView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsFullAlbumsView}
		 * @memberof ArtistsViews
		 */
		fullAlbums?: ArtistsViewsArtistsFullAlbumsView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsLatestReleaseView}
		 * @memberof ArtistsViews
		 */
		latestRelease?: ArtistsViewsArtistsLatestReleaseView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsLiveAlbumsView}
		 * @memberof ArtistsViews
		 */
		liveAlbums?: ArtistsViewsArtistsLiveAlbumsView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsSimilarArtistsView}
		 * @memberof ArtistsViews
		 */
		similarArtists?: ArtistsViewsArtistsSimilarArtistsView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsSinglesView}
		 * @memberof ArtistsViews
		 */
		singles?: ArtistsViewsArtistsSinglesView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsTopMusicVideosView}
		 * @memberof ArtistsViews
		 */
		topMusicVideos?: ArtistsViewsArtistsTopMusicVideosView;
		/**
		 * 
		 * @type {ArtistsViewsArtistsTopSongsView}
		 * @memberof ArtistsViews
		 */
		topSongs?: ArtistsViewsArtistsTopSongsView;
	}
	/**
	 * A relationship view from this artist to a selection of albums from other artists on which this artist also appears.
	 * @export
	 * @interface ArtistsViewsArtistsAppearsOnAlbumsView
	 */
	export interface ArtistsViewsArtistsAppearsOnAlbumsView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsAppearsOnAlbumsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsAppearsOnAlbumsView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsAppearsOnAlbumsViewAttributes}
		 * @memberof ArtistsViewsArtistsAppearsOnAlbumsView
		 */
		attributes: ArtistsViewsArtistsAppearsOnAlbumsViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof ArtistsViewsArtistsAppearsOnAlbumsView
		 */
		data: Array<Albums>;
	}
	/**
	 * Albums from other artists on which this artist appears or with which they’re associated.
	 * @export
	 * @interface ArtistsViewsArtistsAppearsOnAlbumsViewAttributes
	 */
	export interface ArtistsViewsArtistsAppearsOnAlbumsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsAppearsOnAlbumsViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to albums associated with the artist categorized as compilations.
	 * @export
	 * @interface ArtistsViewsArtistsCompilationAlbumsView
	 */
	export interface ArtistsViewsArtistsCompilationAlbumsView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsCompilationAlbumsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsCompilationAlbumsView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsCompilationAlbumsViewAttributes}
		 * @memberof ArtistsViewsArtistsCompilationAlbumsView
		 */
		attributes: ArtistsViewsArtistsCompilationAlbumsViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof ArtistsViewsArtistsCompilationAlbumsView
		 */
		data: Array<Albums>;
	}
	/**
	 * Albums associated with the artist categorized as compilations.
	 * @export
	 * @interface ArtistsViewsArtistsCompilationAlbumsViewAttributes
	 */
	export interface ArtistsViewsArtistsCompilationAlbumsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsCompilationAlbumsViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to a collection of albums selected as featured for the artist.
	 * @export
	 * @interface ArtistsViewsArtistsFeaturedAlbumsView
	 */
	export interface ArtistsViewsArtistsFeaturedAlbumsView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFeaturedAlbumsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFeaturedAlbumsView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsFeaturedAlbumsViewAttributes}
		 * @memberof ArtistsViewsArtistsFeaturedAlbumsView
		 */
		attributes: ArtistsViewsArtistsFeaturedAlbumsViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof ArtistsViewsArtistsFeaturedAlbumsView
		 */
		data: Array<Albums>;
	}
	/**
	 * A collection of selected albums to be featured with the artist.
	 * @export
	 * @interface ArtistsViewsArtistsFeaturedAlbumsViewAttributes
	 */
	export interface ArtistsViewsArtistsFeaturedAlbumsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFeaturedAlbumsViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to a collection of music videos selected as featured for the artist.
	 * @export
	 * @interface ArtistsViewsArtistsFeaturedMusicVideosView
	 */
	export interface ArtistsViewsArtistsFeaturedMusicVideosView {
		/**
		 * 
		 * @type {ArtistsViewsArtistsFeaturedMusicVideosViewAttributes}
		 * @memberof ArtistsViewsArtistsFeaturedMusicVideosView
		 */
		attributes: ArtistsViewsArtistsFeaturedMusicVideosViewAttributes;
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof ArtistsViewsArtistsFeaturedMusicVideosView
		 */
		data: Array<MusicVideos>;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFeaturedMusicVideosView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFeaturedMusicVideosView
		 */
		next?: string;
	}
	/**
	 * A collection of selected music videos to be featured with the artist.
	 * @export
	 * @interface ArtistsViewsArtistsFeaturedMusicVideosViewAttributes
	 */
	export interface ArtistsViewsArtistsFeaturedMusicVideosViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFeaturedMusicVideosViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to relevant playlists associated with the artist.
	 * @export
	 * @interface ArtistsViewsArtistsFeaturedPlaylistsView
	 */
	export interface ArtistsViewsArtistsFeaturedPlaylistsView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFeaturedPlaylistsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFeaturedPlaylistsView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsFeaturedPlaylistsViewAttributes}
		 * @memberof ArtistsViewsArtistsFeaturedPlaylistsView
		 */
		attributes: ArtistsViewsArtistsFeaturedPlaylistsViewAttributes;
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof ArtistsViewsArtistsFeaturedPlaylistsView
		 */
		data: Array<Playlists>;
	}
	/**
	 * Relevant playlists associated with the artist.
	 * @export
	 * @interface ArtistsViewsArtistsFeaturedPlaylistsViewAttributes
	 */
	export interface ArtistsViewsArtistsFeaturedPlaylistsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFeaturedPlaylistsViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to full-release albums associated with the artist.
	 * @export
	 * @interface ArtistsViewsArtistsFullAlbumsView
	 */
	export interface ArtistsViewsArtistsFullAlbumsView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFullAlbumsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFullAlbumsView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsFullAlbumsViewAttributes}
		 * @memberof ArtistsViewsArtistsFullAlbumsView
		 */
		attributes: ArtistsViewsArtistsFullAlbumsViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof ArtistsViewsArtistsFullAlbumsView
		 */
		data: Array<Albums>;
	}
	/**
	 * Full-release albums associated with the artist.
	 * @export
	 * @interface ArtistsViewsArtistsFullAlbumsViewAttributes
	 */
	export interface ArtistsViewsArtistsFullAlbumsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsFullAlbumsViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to the latest release for the artist determined to still be recent by the Apple Music Catalog.
	 * @export
	 * @interface ArtistsViewsArtistsLatestReleaseView
	 */
	export interface ArtistsViewsArtistsLatestReleaseView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsLatestReleaseView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsLatestReleaseView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsLatestReleaseViewAttributes}
		 * @memberof ArtistsViewsArtistsLatestReleaseView
		 */
		attributes: ArtistsViewsArtistsLatestReleaseViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof ArtistsViewsArtistsLatestReleaseView
		 */
		data: Array<Albums>;
	}
	/**
	 * The latest release for the artist determined to still be recent by the Apple Music Catalog.
	 * @export
	 * @interface ArtistsViewsArtistsLatestReleaseViewAttributes
	 */
	export interface ArtistsViewsArtistsLatestReleaseViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsLatestReleaseViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to albums associated with the artist categorized as live performances.
	 * @export
	 * @interface ArtistsViewsArtistsLiveAlbumsView
	 */
	export interface ArtistsViewsArtistsLiveAlbumsView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsLiveAlbumsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsLiveAlbumsView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsLiveAlbumsViewAttributes}
		 * @memberof ArtistsViewsArtistsLiveAlbumsView
		 */
		attributes: ArtistsViewsArtistsLiveAlbumsViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof ArtistsViewsArtistsLiveAlbumsView
		 */
		data: Array<Albums>;
	}
	/**
	 * Albums associated with the artist and categorized as live performances.
	 * @export
	 * @interface ArtistsViewsArtistsLiveAlbumsViewAttributes
	 */
	export interface ArtistsViewsArtistsLiveAlbumsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsLiveAlbumsViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to other artists similar to this artist.
	 * @export
	 * @interface ArtistsViewsArtistsSimilarArtistsView
	 */
	export interface ArtistsViewsArtistsSimilarArtistsView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsSimilarArtistsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsSimilarArtistsView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsSimilarArtistsViewAttributes}
		 * @memberof ArtistsViewsArtistsSimilarArtistsView
		 */
		attributes: ArtistsViewsArtistsSimilarArtistsViewAttributes;
		/**
		 * 
		 * @type {Array<Artists>}
		 * @memberof ArtistsViewsArtistsSimilarArtistsView
		 */
		data: Array<Artists>;
	}
	/**
	 * Other artists similar to this artist.
	 * @export
	 * @interface ArtistsViewsArtistsSimilarArtistsViewAttributes
	 */
	export interface ArtistsViewsArtistsSimilarArtistsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsSimilarArtistsViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to albums associated with the artist categorized as singles.
	 * @export
	 * @interface ArtistsViewsArtistsSinglesView
	 */
	export interface ArtistsViewsArtistsSinglesView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsSinglesView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsSinglesView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsSinglesViewAttributes}
		 * @memberof ArtistsViewsArtistsSinglesView
		 */
		attributes: ArtistsViewsArtistsSinglesViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof ArtistsViewsArtistsSinglesView
		 */
		data: Array<Albums>;
	}
	/**
	 * Albums associated with the artist and categorized as singles.
	 * @export
	 * @interface ArtistsViewsArtistsSinglesViewAttributes
	 */
	export interface ArtistsViewsArtistsSinglesViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsSinglesViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to relevant music videos associated with the artist.
	 * @export
	 * @interface ArtistsViewsArtistsTopMusicVideosView
	 */
	export interface ArtistsViewsArtistsTopMusicVideosView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsTopMusicVideosView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsTopMusicVideosView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsTopMusicVideosViewAttributes}
		 * @memberof ArtistsViewsArtistsTopMusicVideosView
		 */
		attributes: ArtistsViewsArtistsTopMusicVideosViewAttributes;
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof ArtistsViewsArtistsTopMusicVideosView
		 */
		data: Array<MusicVideos>;
	}
	/**
	 * Relevant music videos associated with the artist.
	 * @export
	 * @interface ArtistsViewsArtistsTopMusicVideosViewAttributes
	 */
	export interface ArtistsViewsArtistsTopMusicVideosViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsTopMusicVideosViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this artist to songs associated with the artist based on popularity in the current storefront.
	 * @export
	 * @interface ArtistsViewsArtistsTopSongsView
	 */
	export interface ArtistsViewsArtistsTopSongsView {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsTopSongsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsTopSongsView
		 */
		next?: string;
		/**
		 * 
		 * @type {ArtistsViewsArtistsTopSongsViewAttributes}
		 * @memberof ArtistsViewsArtistsTopSongsView
		 */
		attributes: ArtistsViewsArtistsTopSongsViewAttributes;
		/**
		 * 
		 * @type {Array<Songs>}
		 * @memberof ArtistsViewsArtistsTopSongsView
		 */
		data: Array<Songs>;
	}
	/**
	 * Songs associated with the artist based on popularity in the current storefront.
	 * @export
	 * @interface ArtistsViewsArtistsTopSongsViewAttributes
	 */
	export interface ArtistsViewsArtistsTopSongsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof ArtistsViewsArtistsTopSongsViewAttributes
		 */
		title: string;
	}
	/**
	 * An object that represents artwork.
	 * @export
	 * @interface Artwork
	 */
	export interface Artwork {
		/**
		 * 
		 * @type {string}
		 * @memberof Artwork
		 */
		bgColor?: string;
		/**
		 * 
		 * @type {number}
		 * @memberof Artwork
		 */
		height: number;
		/**
		 * 
		 * @type {number}
		 * @memberof Artwork
		 */
		width: number;
		/**
		 * 
		 * @type {string}
		 * @memberof Artwork
		 */
		textColor1?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Artwork
		 */
		textColor2?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Artwork
		 */
		textColor3?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Artwork
		 */
		textColor4?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Artwork
		 */
		url: string;
	}
	/**
	 * The response to a request for a chart.
	 * @export
	 * @interface ChartResponse
	 */
	export interface ChartResponse {
		/**
		 * 
		 * @type {ChartResponseResults}
		 * @memberof ChartResponse
		 */
		results: ChartResponseResults;
	}
	/**
	 * A mapping of a requested type to an array of charts.
	 * @export
	 * @interface ChartResponseResults
	 */
	export interface ChartResponseResults {
		/**
		 * 
		 * @type {Array<ChartResponseResultsAlbumsChart>}
		 * @memberof ChartResponseResults
		 */
		albums: Array<ChartResponseResultsAlbumsChart>;
		/**
		 * 
		 * @type {Array<ChartResponseResultsMusicVideosChart>}
		 * @memberof ChartResponseResults
		 */
		musicVideos: Array<ChartResponseResultsMusicVideosChart>;
		/**
		 * 
		 * @type {Array<ChartResponseResultsPlaylistsChart>}
		 * @memberof ChartResponseResults
		 */
		playlists: Array<ChartResponseResultsPlaylistsChart>;
		/**
		 * 
		 * @type {Array<ChartResponseResultsSongsChart>}
		 * @memberof ChartResponseResults
		 */
		songs: Array<ChartResponseResultsSongsChart>;
	}
	/**
	 * The albums results of a chart.
	 * @export
	 * @interface ChartResponseResultsAlbumsChart
	 */
	export interface ChartResponseResultsAlbumsChart {
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsAlbumsChart
		 */
		chart: string;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof ChartResponseResultsAlbumsChart
		 */
		data: Array<Albums>;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsAlbumsChart
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsAlbumsChart
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsAlbumsChart
		 */
		next?: string;
	}
	/**
	 * The music videos results of a chart.
	 * @export
	 * @interface ChartResponseResultsMusicVideosChart
	 */
	export interface ChartResponseResultsMusicVideosChart {
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsMusicVideosChart
		 */
		chart: string;
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof ChartResponseResultsMusicVideosChart
		 */
		data: Array<MusicVideos>;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsMusicVideosChart
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsMusicVideosChart
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsMusicVideosChart
		 */
		next?: string;
	}
	/**
	 * The playlists results of a chart.
	 * @export
	 * @interface ChartResponseResultsPlaylistsChart
	 */
	export interface ChartResponseResultsPlaylistsChart {
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsPlaylistsChart
		 */
		chart: string;
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof ChartResponseResultsPlaylistsChart
		 */
		data: Array<Playlists>;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsPlaylistsChart
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsPlaylistsChart
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsPlaylistsChart
		 */
		next?: string;
	}
	/**
	 * The songs results of a chart.
	 * @export
	 * @interface ChartResponseResultsSongsChart
	 */
	export interface ChartResponseResultsSongsChart {
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsSongsChart
		 */
		chart: string;
		/**
		 * 
		 * @type {Array<Songs>}
		 * @memberof ChartResponseResultsSongsChart
		 */
		data: Array<Songs>;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsSongsChart
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsSongsChart
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ChartResponseResultsSongsChart
		 */
		next?: string;
	}
	/**
	 * A resource object that represents a curator.
	 * @export
	 * @interface Curators
	 */
	export interface Curators {
		/**
		 * 
		 * @type {string}
		 * @memberof Curators
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Curators
		 */
		type: CuratorsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof Curators
		 */
		href: string;
		/**
		 * 
		 * @type {CuratorsAttributes}
		 * @memberof Curators
		 */
		attributes?: CuratorsAttributes;
		/**
		 * 
		 * @type {CuratorsRelationships}
		 * @memberof Curators
		 */
		relationships?: CuratorsRelationships;
	}


	/**
	 * @export
	 */
	export const CuratorsTypeEnum = {
		Curators: 'curators'
	} as const;
	export type CuratorsTypeEnum = typeof CuratorsTypeEnum[keyof typeof CuratorsTypeEnum];

	/**
	 * The attributes for a curator resource.
	 * @export
	 * @interface CuratorsAttributes
	 */
	export interface CuratorsAttributes {
		/**
		 * 
		 * @type {Artwork}
		 * @memberof CuratorsAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {EditorialNotes}
		 * @memberof CuratorsAttributes
		 */
		editorialNotes?: EditorialNotes;
		/**
		 * 
		 * @type {string}
		 * @memberof CuratorsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof CuratorsAttributes
		 */
		url: string;
	}
	/**
	 * The relationships for a curator resource.
	 * @export
	 * @interface CuratorsRelationships
	 */
	export interface CuratorsRelationships {
		/**
		 * 
		 * @type {CuratorsRelationshipsCuratorsPlaylistsRelationship}
		 * @memberof CuratorsRelationships
		 */
		playlists?: CuratorsRelationshipsCuratorsPlaylistsRelationship;
	}
	/**
	 * A relationship from the curator to its playlists.
	 * @export
	 * @interface CuratorsRelationshipsCuratorsPlaylistsRelationship
	 */
	export interface CuratorsRelationshipsCuratorsPlaylistsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof CuratorsRelationshipsCuratorsPlaylistsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof CuratorsRelationshipsCuratorsPlaylistsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof CuratorsRelationshipsCuratorsPlaylistsRelationship
		 */
		data: Array<Playlists>;
	}
	/**
	 * The response to a request for curators.
	 * @export
	 * @interface CuratorsResponse
	 */
	export interface CuratorsResponse {
		/**
		 * 
		 * @type {Array<Curators>}
		 * @memberof CuratorsResponse
		 */
		data: Array<Curators>;
	}
	/**
	 * An object that represents a description attribute.
	 * @export
	 * @interface DescriptionAttribute
	 */
	export interface DescriptionAttribute {
		/**
		 * 
		 * @type {string}
		 * @memberof DescriptionAttribute
		 */
		_short?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof DescriptionAttribute
		 */
		standard: string;
	}
	/**
	 * An object that represents a notes attribute.
	 * @export
	 * @interface EditorialNotes
	 */
	export interface EditorialNotes {
		/**
		 * 
		 * @type {string}
		 * @memberof EditorialNotes
		 */
		_short?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof EditorialNotes
		 */
		standard?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof EditorialNotes
		 */
		name?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof EditorialNotes
		 */
		tagline?: string;
	}
	/**
	 * The Source object represents the source of an error.
	 * @export
	 * @interface ErrorSource
	 */
	export interface ErrorSource {
		/**
		 * 
		 * @type {string}
		 * @memberof ErrorSource
		 */
		parameter?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ErrorSource
		 */
		pointer?: string;
	}
	/**
	 * A response object indicating that an error occurred while processing the request.
	 * @export
	 * @interface ErrorsResponse
	 */
	export interface ErrorsResponse {
		/**
		 * 
		 * @type {Array<Error>}
		 * @memberof ErrorsResponse
		 */
		errors: Array<Error>;
	}
	/**
	 * A response object indicating that the request wasn’t accepted due to an issue with the authentication.
	 * @export
	 * @interface ForbiddenResponse
	 */
	export interface ForbiddenResponse {
		/**
		 * 
		 * @type {Array<Error>}
		 * @memberof ForbiddenResponse
		 */
		errors: Array<Error>;
	}
	/**
	 * A resource object that represents a music genre.
	 * @export
	 * @interface Genres
	 */
	export interface Genres {
		/**
		 * 
		 * @type {string}
		 * @memberof Genres
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Genres
		 */
		type: GenresTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof Genres
		 */
		href: string;
		/**
		 * 
		 * @type {GenresAttributes}
		 * @memberof Genres
		 */
		attributes?: GenresAttributes;
	}


	/**
	 * @export
	 */
	export const GenresTypeEnum = {
		Genres: 'genres'
	} as const;
	export type GenresTypeEnum = typeof GenresTypeEnum[keyof typeof GenresTypeEnum];

	/**
	 * The attributes for a genre resource.
	 * @export
	 * @interface GenresAttributes
	 */
	export interface GenresAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof GenresAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof GenresAttributes
		 */
		parentId?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof GenresAttributes
		 */
		parentName?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof GenresAttributes
		 */
		chartLabel?: string;
	}
	/**
	 * The response to a genres request.
	 * @export
	 * @interface GenresResponse
	 */
	export interface GenresResponse {
		/**
		 * 
		 * @type {Array<Genres>}
		 * @memberof GenresResponse
		 */
		data: Array<Genres>;
	}
	/**
	 * The response to a language tag request.
	 * @export
	 * @interface LangageTagResponse
	 */
	export interface LangageTagResponse {
		/**
		 * 
		 * @type {LangageTagResponseResults}
		 * @memberof LangageTagResponse
		 */
		results: LangageTagResponseResults;
	}
	/**
	 * Results included in the response for a storefront resource request.
	 * @export
	 * @interface LangageTagResponseResults
	 */
	export interface LangageTagResponseResults {
		/**
		 * 
		 * @type {string}
		 * @memberof LangageTagResponseResults
		 */
		tag: string;
	}
	/**
	 * A resource object that represents a library album.
	 * @export
	 * @interface LibraryAlbums
	 */
	export interface LibraryAlbums {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbums
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbums
		 */
		type: LibraryAlbumsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbums
		 */
		href: string;
		/**
		 * 
		 * @type {LibraryAlbumsAttributes}
		 * @memberof LibraryAlbums
		 */
		attributes?: LibraryAlbumsAttributes;
		/**
		 * 
		 * @type {LibraryAlbumsRelationships}
		 * @memberof LibraryAlbums
		 */
		relationships?: LibraryAlbumsRelationships;
	}


	/**
	 * @export
	 */
	export const LibraryAlbumsTypeEnum = {
		LibraryAlbums: 'library-albums'
	} as const;
	export type LibraryAlbumsTypeEnum = typeof LibraryAlbumsTypeEnum[keyof typeof LibraryAlbumsTypeEnum];

	/**
	 * The attributes for a library album resource.
	 * @export
	 * @interface LibraryAlbumsAttributes
	 */
	export interface LibraryAlbumsAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsAttributes
		 */
		artistName: string;
		/**
		 * 
		 * @type {Artwork}
		 * @memberof LibraryAlbumsAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsAttributes
		 */
		contentRating?: LibraryAlbumsAttributesContentRatingEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsAttributes
		 */
		dateAdded?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {PlayParameters}
		 * @memberof LibraryAlbumsAttributes
		 */
		playParams?: PlayParameters;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsAttributes
		 */
		releaseDate?: string;
		/**
		 * 
		 * @type {number}
		 * @memberof LibraryAlbumsAttributes
		 */
		trackCount: number;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof LibraryAlbumsAttributes
		 */
		genreNames: Array<string>;
	}


	/**
	 * @export
	 */
	export const LibraryAlbumsAttributesContentRatingEnum = {
		Clean: 'clean',
		Explicit: 'explicit'
	} as const;
	export type LibraryAlbumsAttributesContentRatingEnum = typeof LibraryAlbumsAttributesContentRatingEnum[keyof typeof LibraryAlbumsAttributesContentRatingEnum];

	/**
	 * The relationships for a library album object.
	 * @export
	 * @interface LibraryAlbumsRelationships
	 */
	export interface LibraryAlbumsRelationships {
		/**
		 * 
		 * @type {LibraryAlbumsRelationshipsLibraryAlbumsArtistsRelationship}
		 * @memberof LibraryAlbumsRelationships
		 */
		artists?: LibraryAlbumsRelationshipsLibraryAlbumsArtistsRelationship;
		/**
		 * 
		 * @type {LibraryAlbumsRelationshipsLibraryAlbumsCatalogRelationship}
		 * @memberof LibraryAlbumsRelationships
		 */
		catalog?: LibraryAlbumsRelationshipsLibraryAlbumsCatalogRelationship;
		/**
		 * 
		 * @type {LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationship}
		 * @memberof LibraryAlbumsRelationships
		 */
		tracks?: LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationship;
	}
	/**
	 * A relationship from the library album to its artist.
	 * @export
	 * @interface LibraryAlbumsRelationshipsLibraryAlbumsArtistsRelationship
	 */
	export interface LibraryAlbumsRelationshipsLibraryAlbumsArtistsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsArtistsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsArtistsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryArtists>}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsArtistsRelationship
		 */
		data: Array<LibraryArtists>;
	}
	/**
	 * A relationship from the library album to its associated catalog content.
	 * @export
	 * @interface LibraryAlbumsRelationshipsLibraryAlbumsCatalogRelationship
	 */
	export interface LibraryAlbumsRelationshipsLibraryAlbumsCatalogRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsCatalogRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsCatalogRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsCatalogRelationship
		 */
		data: Array<Albums>;
	}
	/**
	 * A relationship from the library album to its tracks.
	 * @export
	 * @interface LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationship
	 */
	export interface LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner>}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationship
		 */
		data: Array<LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner>;
	}
	/**
	 * 
	 * @export
	 * @interface LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner
	 */
	export interface LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner
		 */
		type: LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInnerTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner
		 */
		href: string;
		/**
		 * 
		 * @type {LibrarySongsAttributes}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner
		 */
		attributes?: LibrarySongsAttributes;
		/**
		 * 
		 * @type {LibrarySongsRelationships}
		 * @memberof LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner
		 */
		relationships?: LibrarySongsRelationships;
	}


	/**
	 * @export
	 */
	export const LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInnerTypeEnum = {
		LibrarySongs: 'library-songs'
	} as const;
	export type LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInnerTypeEnum = typeof LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInnerTypeEnum[keyof typeof LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInnerTypeEnum];

	/**
	 * The response to a library albums request.
	 * @export
	 * @interface LibraryAlbumsResponse
	 */
	export interface LibraryAlbumsResponse {
		/**
		 * 
		 * @type {Array<LibraryAlbums>}
		 * @memberof LibraryAlbumsResponse
		 */
		data: Array<LibraryAlbums>;
	}
	/**
	 * A resource object that represents an artist present in a user’s library.
	 * @export
	 * @interface LibraryArtists
	 */
	export interface LibraryArtists {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryArtists
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryArtists
		 */
		type: LibraryArtistsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryArtists
		 */
		href: string;
		/**
		 * 
		 * @type {LibraryArtistsAttributes}
		 * @memberof LibraryArtists
		 */
		attributes?: LibraryArtistsAttributes;
		/**
		 * 
		 * @type {LibraryArtistsRelationships}
		 * @memberof LibraryArtists
		 */
		relationships?: LibraryArtistsRelationships;
	}


	/**
	 * @export
	 */
	export const LibraryArtistsTypeEnum = {
		LibraryArtists: 'library-artists'
	} as const;
	export type LibraryArtistsTypeEnum = typeof LibraryArtistsTypeEnum[keyof typeof LibraryArtistsTypeEnum];

	/**
	 * The attributes for a library artist resource.
	 * @export
	 * @interface LibraryArtistsAttributes
	 */
	export interface LibraryArtistsAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryArtistsAttributes
		 */
		name: string;
	}
	/**
	 * The relationships for a library artist resource.
	 * @export
	 * @interface LibraryArtistsRelationships
	 */
	export interface LibraryArtistsRelationships {
		/**
		 * 
		 * @type {LibraryArtistsRelationshipsLibraryArtistsAlbumsRelationship}
		 * @memberof LibraryArtistsRelationships
		 */
		albums?: LibraryArtistsRelationshipsLibraryArtistsAlbumsRelationship;
		/**
		 * 
		 * @type {LibraryArtistsRelationshipsLibraryArtistsCatalogRelationship}
		 * @memberof LibraryArtistsRelationships
		 */
		catalog?: LibraryArtistsRelationshipsLibraryArtistsCatalogRelationship;
	}
	/**
	 * A relationship from the library artist to thier albums.
	 * @export
	 * @interface LibraryArtistsRelationshipsLibraryArtistsAlbumsRelationship
	 */
	export interface LibraryArtistsRelationshipsLibraryArtistsAlbumsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryArtistsRelationshipsLibraryArtistsAlbumsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryArtistsRelationshipsLibraryArtistsAlbumsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryAlbums>}
		 * @memberof LibraryArtistsRelationshipsLibraryArtistsAlbumsRelationship
		 */
		data: Array<LibraryAlbums>;
	}
	/**
	 * A relationship from the library artist to their associated catalog content.
	 * @export
	 * @interface LibraryArtistsRelationshipsLibraryArtistsCatalogRelationship
	 */
	export interface LibraryArtistsRelationshipsLibraryArtistsCatalogRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryArtistsRelationshipsLibraryArtistsCatalogRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryArtistsRelationshipsLibraryArtistsCatalogRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Artists>}
		 * @memberof LibraryArtistsRelationshipsLibraryArtistsCatalogRelationship
		 */
		data: Array<Artists>;
	}
	/**
	 * The response to a library artists request.
	 * @export
	 * @interface LibraryArtistsResponse
	 */
	export interface LibraryArtistsResponse {
		/**
		 * 
		 * @type {Array<LibraryArtists>}
		 * @memberof LibraryArtistsResponse
		 */
		data: Array<LibraryArtists>;
	}
	/**
	 * A resource object that represents a library music video.
	 * @export
	 * @interface LibraryMusicVideos
	 */
	export interface LibraryMusicVideos {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideos
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideos
		 */
		type: LibraryMusicVideosTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideos
		 */
		href: string;
		/**
		 * 
		 * @type {LibraryMusicVideosAttributes}
		 * @memberof LibraryMusicVideos
		 */
		attributes?: LibraryMusicVideosAttributes;
		/**
		 * 
		 * @type {LibraryMusicVideosRelationships}
		 * @memberof LibraryMusicVideos
		 */
		relationships?: LibraryMusicVideosRelationships;
	}


	/**
	 * @export
	 */
	export const LibraryMusicVideosTypeEnum = {
		LibraryMusicVideos: 'library-music-videos'
	} as const;
	export type LibraryMusicVideosTypeEnum = typeof LibraryMusicVideosTypeEnum[keyof typeof LibraryMusicVideosTypeEnum];

	/**
	 * The attributes for the library music videos resource type.
	 * @export
	 * @interface LibraryMusicVideosAttributes
	 */
	export interface LibraryMusicVideosAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosAttributes
		 */
		albumName?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosAttributes
		 */
		artistName: string;
		/**
		 * 
		 * @type {Artwork}
		 * @memberof LibraryMusicVideosAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosAttributes
		 */
		contentRating?: LibraryMusicVideosAttributesContentRatingEnum;
		/**
		 * 
		 * @type {number}
		 * @memberof LibraryMusicVideosAttributes
		 */
		durationInMillis: number;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof LibraryMusicVideosAttributes
		 */
		genreNames: Array<string>;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {PlayParameters}
		 * @memberof LibraryMusicVideosAttributes
		 */
		playParams?: PlayParameters;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosAttributes
		 */
		releaseDate?: string;
		/**
		 * 
		 * @type {number}
		 * @memberof LibraryMusicVideosAttributes
		 */
		trackNumber?: number;
	}


	/**
	 * @export
	 */
	export const LibraryMusicVideosAttributesContentRatingEnum = {
		Clean: 'clean',
		Explicit: 'explicit'
	} as const;
	export type LibraryMusicVideosAttributesContentRatingEnum = typeof LibraryMusicVideosAttributesContentRatingEnum[keyof typeof LibraryMusicVideosAttributesContentRatingEnum];

	/**
	 * The relationships from library music videos to other resources.
	 * @export
	 * @interface LibraryMusicVideosRelationships
	 */
	export interface LibraryMusicVideosRelationships {
		/**
		 * 
		 * @type {LibraryMusicVideosRelationshipsLibraryMusicVideosAlbumsRelationship}
		 * @memberof LibraryMusicVideosRelationships
		 */
		albums?: LibraryMusicVideosRelationshipsLibraryMusicVideosAlbumsRelationship;
		/**
		 * 
		 * @type {LibraryMusicVideosRelationshipsLibraryMusicVideosArtistsRelationship}
		 * @memberof LibraryMusicVideosRelationships
		 */
		artists?: LibraryMusicVideosRelationshipsLibraryMusicVideosArtistsRelationship;
		/**
		 * 
		 * @type {LibraryMusicVideosRelationshipsLibraryMusicVideosCatalogRelationship}
		 * @memberof LibraryMusicVideosRelationships
		 */
		catalog?: LibraryMusicVideosRelationshipsLibraryMusicVideosCatalogRelationship;
	}
	/**
	 * A relationship from the library music video to its albums in the library.
	 * @export
	 * @interface LibraryMusicVideosRelationshipsLibraryMusicVideosAlbumsRelationship
	 */
	export interface LibraryMusicVideosRelationshipsLibraryMusicVideosAlbumsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosRelationshipsLibraryMusicVideosAlbumsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosRelationshipsLibraryMusicVideosAlbumsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryAlbums>}
		 * @memberof LibraryMusicVideosRelationshipsLibraryMusicVideosAlbumsRelationship
		 */
		data: Array<LibraryAlbums>;
	}
	/**
	 * A relationship from the library music video to its artists in the library.
	 * @export
	 * @interface LibraryMusicVideosRelationshipsLibraryMusicVideosArtistsRelationship
	 */
	export interface LibraryMusicVideosRelationshipsLibraryMusicVideosArtistsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosRelationshipsLibraryMusicVideosArtistsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosRelationshipsLibraryMusicVideosArtistsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryArtists>}
		 * @memberof LibraryMusicVideosRelationshipsLibraryMusicVideosArtistsRelationship
		 */
		data: Array<LibraryArtists>;
	}
	/**
	 * A relationship from the library music video to its associated catalog content.
	 * @export
	 * @interface LibraryMusicVideosRelationshipsLibraryMusicVideosCatalogRelationship
	 */
	export interface LibraryMusicVideosRelationshipsLibraryMusicVideosCatalogRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosRelationshipsLibraryMusicVideosCatalogRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryMusicVideosRelationshipsLibraryMusicVideosCatalogRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof LibraryMusicVideosRelationshipsLibraryMusicVideosCatalogRelationship
		 */
		data: Array<MusicVideos>;
	}
	/**
	 * The response to a library music videos request.
	 * @export
	 * @interface LibraryMusicVideosResponse
	 */
	export interface LibraryMusicVideosResponse {
		/**
		 * 
		 * @type {Array<LibraryMusicVideos>}
		 * @memberof LibraryMusicVideosResponse
		 */
		data: Array<LibraryMusicVideos>;
	}
	/**
	 * A request to create a new playlist in a user’s library.
	 * @export
	 * @interface LibraryPlaylistCreationRequest
	 */
	export interface LibraryPlaylistCreationRequest {
		/**
		 * 
		 * @type {LibraryPlaylistCreationRequestAttributes}
		 * @memberof LibraryPlaylistCreationRequest
		 */
		attributes: LibraryPlaylistCreationRequestAttributes;
		/**
		 * 
		 * @type {LibraryPlaylistCreationRequestRelationships}
		 * @memberof LibraryPlaylistCreationRequest
		 */
		relationships?: LibraryPlaylistCreationRequestRelationships;
	}
	/**
	 * The attributes for a library playlist creation request object.
	 * @export
	 * @interface LibraryPlaylistCreationRequestAttributes
	 */
	export interface LibraryPlaylistCreationRequestAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistCreationRequestAttributes
		 */
		description?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistCreationRequestAttributes
		 */
		name: string;
	}
	/**
	 * The relationships for a library playlist creation request object.
	 * @export
	 * @interface LibraryPlaylistCreationRequestRelationships
	 */
	export interface LibraryPlaylistCreationRequestRelationships {
		/**
		 * 
		 * @type {LibraryPlaylistCreationRequestRelationshipsTracks}
		 * @memberof LibraryPlaylistCreationRequestRelationships
		 */
		tracks: LibraryPlaylistCreationRequestRelationshipsTracks;
		/**
		 * 
		 * @type {LibraryPlaylistCreationRequestRelationshipsParent}
		 * @memberof LibraryPlaylistCreationRequestRelationships
		 */
		parent: LibraryPlaylistCreationRequestRelationshipsParent;
	}
	/**
	 * Library playlist folder which contains the playlist that the user creates.
	 * @export
	 * @interface LibraryPlaylistCreationRequestRelationshipsParent
	 */
	export interface LibraryPlaylistCreationRequestRelationshipsParent {
		/**
		 * 
		 * @type {Array<LibraryPlaylistCreationRequestRelationshipsParentData>}
		 * @memberof LibraryPlaylistCreationRequestRelationshipsParent
		 */
		data: Array<LibraryPlaylistCreationRequestRelationshipsParentData>;
	}
	/**
	 * Data of the library playlist folder which contains the created library playlist that the user creates.
	 * @export
	 * @interface LibraryPlaylistCreationRequestRelationshipsParentData
	 */
	export interface LibraryPlaylistCreationRequestRelationshipsParentData {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistCreationRequestRelationshipsParentData
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistCreationRequestRelationshipsParentData
		 */
		type: LibraryPlaylistCreationRequestRelationshipsParentDataTypeEnum;
	}


	/**
	 * @export
	 */
	export const LibraryPlaylistCreationRequestRelationshipsParentDataTypeEnum = {
		LibraryPlaylistFolders: 'library-playlist-folders'
	} as const;
	export type LibraryPlaylistCreationRequestRelationshipsParentDataTypeEnum = typeof LibraryPlaylistCreationRequestRelationshipsParentDataTypeEnum[keyof typeof LibraryPlaylistCreationRequestRelationshipsParentDataTypeEnum];

	/**
	 * The songs and music videos to add to the created playlist’s tracklist.
	 * @export
	 * @interface LibraryPlaylistCreationRequestRelationshipsTracks
	 */
	export interface LibraryPlaylistCreationRequestRelationshipsTracks {
		/**
		 * 
		 * @type {Array<LibraryPlaylistCreationRequestRelationshipsTracksData>}
		 * @memberof LibraryPlaylistCreationRequestRelationshipsTracks
		 */
		data: Array<LibraryPlaylistCreationRequestRelationshipsTracksData>;
	}
	/**
	 * Data of the tracks too add to the created library playlist.
	 * @export
	 * @interface LibraryPlaylistCreationRequestRelationshipsTracksData
	 */
	export interface LibraryPlaylistCreationRequestRelationshipsTracksData {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistCreationRequestRelationshipsTracksData
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistCreationRequestRelationshipsTracksData
		 */
		type: LibraryPlaylistCreationRequestRelationshipsTracksDataTypeEnum;
	}


	/**
	 * @export
	 */
	export const LibraryPlaylistCreationRequestRelationshipsTracksDataTypeEnum = {
		LibraryMusicVideos: 'library-music-videos',
		LibrarySongs: 'library-songs',
		MusicVideos: 'music-videos',
		Songs: 'songs'
	} as const;
	export type LibraryPlaylistCreationRequestRelationshipsTracksDataTypeEnum = typeof LibraryPlaylistCreationRequestRelationshipsTracksDataTypeEnum[keyof typeof LibraryPlaylistCreationRequestRelationshipsTracksDataTypeEnum];

	/**
	 * Request object to create a new library playlist folder.
	 * @export
	 * @interface LibraryPlaylistFolderCreationRequest
	 */
	export interface LibraryPlaylistFolderCreationRequest {
		/**
		 * 
		 * @type {LibraryPlaylistFolderCreationRequestAttributes}
		 * @memberof LibraryPlaylistFolderCreationRequest
		 */
		attributes: LibraryPlaylistFolderCreationRequestAttributes;
		/**
		 * 
		 * @type {LibraryPlaylistFolderCreationRequestRelationships}
		 * @memberof LibraryPlaylistFolderCreationRequest
		 */
		relationships?: LibraryPlaylistFolderCreationRequestRelationships;
	}
	/**
	 * The attributes for a library playlist folder creation request object.
	 * @export
	 * @interface LibraryPlaylistFolderCreationRequestAttributes
	 */
	export interface LibraryPlaylistFolderCreationRequestAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFolderCreationRequestAttributes
		 */
		name: string;
	}
	/**
	 * The relationships of the library playlist folder of the creation request.
	 * @export
	 * @interface LibraryPlaylistFolderCreationRequestRelationships
	 */
	export interface LibraryPlaylistFolderCreationRequestRelationships {
		/**
		 * 
		 * @type {LibraryPlaylistFolderCreationRequestRelationshipsParent}
		 * @memberof LibraryPlaylistFolderCreationRequestRelationships
		 */
		parent: LibraryPlaylistFolderCreationRequestRelationshipsParent;
	}
	/**
	 * The parent of the playlist folder of the creation request.
	 * @export
	 * @interface LibraryPlaylistFolderCreationRequestRelationshipsParent
	 */
	export interface LibraryPlaylistFolderCreationRequestRelationshipsParent {
		/**
		 * 
		 * @type {Array<LibraryPlaylistFolderCreationRequestRelationshipsParentData>}
		 * @memberof LibraryPlaylistFolderCreationRequestRelationshipsParent
		 */
		data: Array<LibraryPlaylistFolderCreationRequestRelationshipsParentData>;
	}
	/**
	 * Data of the parent of the library playlist folder of the creation request.
	 * @export
	 * @interface LibraryPlaylistFolderCreationRequestRelationshipsParentData
	 */
	export interface LibraryPlaylistFolderCreationRequestRelationshipsParentData {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFolderCreationRequestRelationshipsParentData
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFolderCreationRequestRelationshipsParentData
		 */
		type: LibraryPlaylistFolderCreationRequestRelationshipsParentDataTypeEnum;
	}


	/**
	 * @export
	 */
	export const LibraryPlaylistFolderCreationRequestRelationshipsParentDataTypeEnum = {
		LibraryPlaylistFolders: 'library-playlist-folders'
	} as const;
	export type LibraryPlaylistFolderCreationRequestRelationshipsParentDataTypeEnum = typeof LibraryPlaylistFolderCreationRequestRelationshipsParentDataTypeEnum[keyof typeof LibraryPlaylistFolderCreationRequestRelationshipsParentDataTypeEnum];

	/**
	 * A resource object that represents a library playlist folder.
	 * @export
	 * @interface LibraryPlaylistFolders
	 */
	export interface LibraryPlaylistFolders {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFolders
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFolders
		 */
		type: LibraryPlaylistFoldersTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFolders
		 */
		href: string;
		/**
		 * 
		 * @type {LibraryPlaylistFoldersAttributes}
		 * @memberof LibraryPlaylistFolders
		 */
		attributes?: LibraryPlaylistFoldersAttributes;
		/**
		 * 
		 * @type {LibraryPlaylistFoldersRelationships}
		 * @memberof LibraryPlaylistFolders
		 */
		relationships?: LibraryPlaylistFoldersRelationships;
	}


	/**
	 * @export
	 */
	export const LibraryPlaylistFoldersTypeEnum = {
		LibraryPlaylistFolders: 'library-playlist-folders'
	} as const;
	export type LibraryPlaylistFoldersTypeEnum = typeof LibraryPlaylistFoldersTypeEnum[keyof typeof LibraryPlaylistFoldersTypeEnum];

	/**
	 * A resource object that represents the attributes for a library playlist folder.
	 * @export
	 * @interface LibraryPlaylistFoldersAttributes
	 */
	export interface LibraryPlaylistFoldersAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFoldersAttributes
		 */
		dateAdded?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFoldersAttributes
		 */
		name: string;
	}
	/**
	 * A resource Object that represents the relationships for a library playlist folder.
	 * @export
	 * @interface LibraryPlaylistFoldersRelationships
	 */
	export interface LibraryPlaylistFoldersRelationships {
		/**
		 * 
		 * @type {LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationship}
		 * @memberof LibraryPlaylistFoldersRelationships
		 */
		children?: LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationship;
		/**
		 * 
		 * @type {LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersParentRelationship}
		 * @memberof LibraryPlaylistFoldersRelationships
		 */
		parent?: LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersParentRelationship;
	}
	/**
	 * A resource object that represents the children relationship of a library playlist folder.
	 * @export
	 * @interface LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationship
	 */
	export interface LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInner>}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationship
		 */
		data: Array<LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInner>;
	}
	/**
	 * 
	 * @export
	 * @interface LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInner
	 */
	export interface LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInner {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInner
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInner
		 */
		type: LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInnerTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInner
		 */
		href: string;
		/**
		 * 
		 * @type {LibraryPlaylistsAttributes}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInner
		 */
		attributes?: LibraryPlaylistsAttributes;
		/**
		 * 
		 * @type {LibraryPlaylistsRelationships}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInner
		 */
		relationships?: LibraryPlaylistsRelationships;
	}


	/**
	 * @export
	 */
	export const LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInnerTypeEnum = {
		LibraryPlaylists: 'library-playlists'
	} as const;
	export type LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInnerTypeEnum = typeof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInnerTypeEnum[keyof typeof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersChildrenRelationshipDataInnerTypeEnum];

	/**
	 * A resource object that represents the parent relationship of a library playlist folder.
	 * @export
	 * @interface LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersParentRelationship
	 */
	export interface LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersParentRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersParentRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersParentRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryPlaylistFolders>}
		 * @memberof LibraryPlaylistFoldersRelationshipsLibraryPlaylistFoldersParentRelationship
		 */
		data: Array<LibraryPlaylistFolders>;
	}
	/**
	 * The response to a library playlist folders request.
	 * @export
	 * @interface LibraryPlaylistFoldersResponse
	 */
	export interface LibraryPlaylistFoldersResponse {
		/**
		 * 
		 * @type {Array<LibraryPlaylistFolders>}
		 * @memberof LibraryPlaylistFoldersResponse
		 */
		data: Array<LibraryPlaylistFolders>;
	}
	/**
	 * A request to add tracks to a library playlist.
	 * @export
	 * @interface LibraryPlaylistTracksRequest
	 */
	export interface LibraryPlaylistTracksRequest {
		/**
		 * 
		 * @type {Array<LibraryPlaylistTracksRequestData>}
		 * @memberof LibraryPlaylistTracksRequest
		 */
		data: Array<LibraryPlaylistTracksRequestData>;
	}
	/**
	 * An object that represents a single track when added to a library playlist in a request.
	 * @export
	 * @interface LibraryPlaylistTracksRequestData
	 */
	export interface LibraryPlaylistTracksRequestData {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistTracksRequestData
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistTracksRequestData
		 */
		type: LibraryPlaylistTracksRequestDataTypeEnum;
	}


	/**
	 * @export
	 */
	export const LibraryPlaylistTracksRequestDataTypeEnum = {
		LibraryMusicVideos: 'library-music-videos',
		LibrarySongs: 'library-songs',
		MusicVideos: 'music-videos',
		Songs: 'songs'
	} as const;
	export type LibraryPlaylistTracksRequestDataTypeEnum = typeof LibraryPlaylistTracksRequestDataTypeEnum[keyof typeof LibraryPlaylistTracksRequestDataTypeEnum];

	/**
	 * A resource object that represents a library playlist.
	 * @export
	 * @interface LibraryPlaylists
	 */
	export interface LibraryPlaylists {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylists
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylists
		 */
		type: LibraryPlaylistsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylists
		 */
		href: string;
		/**
		 * 
		 * @type {LibraryPlaylistsAttributes}
		 * @memberof LibraryPlaylists
		 */
		attributes?: LibraryPlaylistsAttributes;
		/**
		 * 
		 * @type {LibraryPlaylistsRelationships}
		 * @memberof LibraryPlaylists
		 */
		relationships?: LibraryPlaylistsRelationships;
	}


	/**
	 * @export
	 */
	export const LibraryPlaylistsTypeEnum = {
		LibraryPlaylists: 'library-playlists'
	} as const;
	export type LibraryPlaylistsTypeEnum = typeof LibraryPlaylistsTypeEnum[keyof typeof LibraryPlaylistsTypeEnum];

	/**
	 * The attributes for a library playlist resource.
	 * @export
	 * @interface LibraryPlaylistsAttributes
	 */
	export interface LibraryPlaylistsAttributes {
		/**
		 * 
		 * @type {Artwork}
		 * @memberof LibraryPlaylistsAttributes
		 */
		artwork?: Artwork;
		/**
		 * 
		 * @type {boolean}
		 * @memberof LibraryPlaylistsAttributes
		 */
		canEdit: boolean;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistsAttributes
		 */
		dateAdded?: string;
		/**
		 * 
		 * @type {DescriptionAttribute}
		 * @memberof LibraryPlaylistsAttributes
		 */
		description?: DescriptionAttribute;
		/**
		 * 
		 * @type {boolean}
		 * @memberof LibraryPlaylistsAttributes
		 */
		hasCatalog: boolean;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {PlayParameters}
		 * @memberof LibraryPlaylistsAttributes
		 */
		playParams?: PlayParameters;
		/**
		 * 
		 * @type {boolean}
		 * @memberof LibraryPlaylistsAttributes
		 */
		isPublic: boolean;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof LibraryPlaylistsAttributes
		 */
		trackTypes?: Array<string>;
	}
	/**
	 * The relationships for a library playlist resource.
	 * @export
	 * @interface LibraryPlaylistsRelationships
	 */
	export interface LibraryPlaylistsRelationships {
		/**
		 * 
		 * @type {LibraryPlaylistsRelationshipsLibraryPlaylistsCatalogRelationship}
		 * @memberof LibraryPlaylistsRelationships
		 */
		catalog?: LibraryPlaylistsRelationshipsLibraryPlaylistsCatalogRelationship;
		/**
		 * 
		 * @type {LibraryPlaylistsRelationshipsLibraryPlaylistsTracksRelationship}
		 * @memberof LibraryPlaylistsRelationships
		 */
		tracks?: LibraryPlaylistsRelationshipsLibraryPlaylistsTracksRelationship;
	}
	/**
	 * A relationship from the playlist to its associated catalog content.
	 * @export
	 * @interface LibraryPlaylistsRelationshipsLibraryPlaylistsCatalogRelationship
	 */
	export interface LibraryPlaylistsRelationshipsLibraryPlaylistsCatalogRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistsRelationshipsLibraryPlaylistsCatalogRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistsRelationshipsLibraryPlaylistsCatalogRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof LibraryPlaylistsRelationshipsLibraryPlaylistsCatalogRelationship
		 */
		data: Array<Playlists>;
	}
	/**
	 * A relationship from the playlist to its tracks.
	 * @export
	 * @interface LibraryPlaylistsRelationshipsLibraryPlaylistsTracksRelationship
	 */
	export interface LibraryPlaylistsRelationshipsLibraryPlaylistsTracksRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistsRelationshipsLibraryPlaylistsTracksRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistsRelationshipsLibraryPlaylistsTracksRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner>}
		 * @memberof LibraryPlaylistsRelationshipsLibraryPlaylistsTracksRelationship
		 */
		data: Array<LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner>;
	}
	/**
	 * The response to a library playlists request.
	 * @export
	 * @interface LibraryPlaylistsResponse
	 */
	export interface LibraryPlaylistsResponse {
		/**
		 * 
		 * @type {Array<LibraryPlaylists>}
		 * @memberof LibraryPlaylistsResponse
		 */
		data: Array<LibraryPlaylists>;
	}
	/**
	 * The response to a library playlists tracks relationship request.
	 * @export
	 * @interface LibraryPlaylistsTracksRelationshipResponse
	 */
	export interface LibraryPlaylistsTracksRelationshipResponse {
		/**
		 * 
		 * @type {Array<LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner>}
		 * @memberof LibraryPlaylistsTracksRelationshipResponse
		 */
		data: Array<LibraryAlbumsRelationshipsLibraryAlbumsTracksRelationshipDataInner>;
		/**
		 * An object that represents the meta information for response to a library playlists tracks relationship request.
		 * @type {any}
		 * @memberof LibraryPlaylistsTracksRelationshipResponse
		 */
		meta?: any | null;
		/**
		 * 
		 * @type {string}
		 * @memberof LibraryPlaylistsTracksRelationshipResponse
		 */
		next?: string;
	}
	/**
	 * The response to a request for a library search.
	 * @export
	 * @interface LibrarySearchResponse
	 */
	export interface LibrarySearchResponse {
		/**
		 * 
		 * @type {LibrarySearchResponseResults}
		 * @memberof LibrarySearchResponse
		 */
		results: LibrarySearchResponseResults;
	}
	/**
	 * An object that represents the results of a library search query.
	 * @export
	 * @interface LibrarySearchResponseResults
	 */
	export interface LibrarySearchResponseResults {
		/**
		 * 
		 * @type {LibrarySearchResponseResultsLibraryAlbumsSearchResult}
		 * @memberof LibrarySearchResponseResults
		 */
		libraryAlbums?: LibrarySearchResponseResultsLibraryAlbumsSearchResult;
		/**
		 * 
		 * @type {LibrarySearchResponseResultsLibraryArtistsSearchResult}
		 * @memberof LibrarySearchResponseResults
		 */
		libraryArtists?: LibrarySearchResponseResultsLibraryArtistsSearchResult;
		/**
		 * 
		 * @type {LibrarySearchResponseResultsLibraryMusicVideosSearchResult}
		 * @memberof LibrarySearchResponseResults
		 */
		libraryMusicVideos?: LibrarySearchResponseResultsLibraryMusicVideosSearchResult;
		/**
		 * 
		 * @type {LibrarySearchResponseResultsLibraryPlaylistsSearchResult}
		 * @memberof LibrarySearchResponseResults
		 */
		libraryPlaylists?: LibrarySearchResponseResultsLibraryPlaylistsSearchResult;
		/**
		 * 
		 * @type {LibrarySearchResponseResultsLibrarySongsSearchResult}
		 * @memberof LibrarySearchResponseResults
		 */
		librarySongs?: LibrarySearchResponseResultsLibrarySongsSearchResult;
	}
	/**
	 * The library albums results for a term search for specific resource types.
	 * @export
	 * @interface LibrarySearchResponseResultsLibraryAlbumsSearchResult
	 */
	export interface LibrarySearchResponseResultsLibraryAlbumsSearchResult {
		/**
		 * 
		 * @type {Array<LibraryAlbums>}
		 * @memberof LibrarySearchResponseResultsLibraryAlbumsSearchResult
		 */
		data: Array<LibraryAlbums>;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySearchResponseResultsLibraryAlbumsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySearchResponseResultsLibraryAlbumsSearchResult
		 */
		next?: string;
	}
	/**
	 * The library artists results for a term search for specific resource types.
	 * @export
	 * @interface LibrarySearchResponseResultsLibraryArtistsSearchResult
	 */
	export interface LibrarySearchResponseResultsLibraryArtistsSearchResult {
		/**
		 * 
		 * @type {Array<LibraryArtists>}
		 * @memberof LibrarySearchResponseResultsLibraryArtistsSearchResult
		 */
		data: Array<LibraryArtists>;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySearchResponseResultsLibraryArtistsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySearchResponseResultsLibraryArtistsSearchResult
		 */
		next?: string;
	}
	/**
	 * The library music videos results for a term search for specific resource types.
	 * @export
	 * @interface LibrarySearchResponseResultsLibraryMusicVideosSearchResult
	 */
	export interface LibrarySearchResponseResultsLibraryMusicVideosSearchResult {
		/**
		 * 
		 * @type {Array<LibraryMusicVideos>}
		 * @memberof LibrarySearchResponseResultsLibraryMusicVideosSearchResult
		 */
		data: Array<LibraryMusicVideos>;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySearchResponseResultsLibraryMusicVideosSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySearchResponseResultsLibraryMusicVideosSearchResult
		 */
		next?: string;
	}
	/**
	 * The library playlists results for a term search for specific resource types.
	 * @export
	 * @interface LibrarySearchResponseResultsLibraryPlaylistsSearchResult
	 */
	export interface LibrarySearchResponseResultsLibraryPlaylistsSearchResult {
		/**
		 * 
		 * @type {Array<LibraryPlaylists>}
		 * @memberof LibrarySearchResponseResultsLibraryPlaylistsSearchResult
		 */
		data: Array<LibraryPlaylists>;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySearchResponseResultsLibraryPlaylistsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySearchResponseResultsLibraryPlaylistsSearchResult
		 */
		next?: string;
	}
	/**
	 * The library songs results for a term search for specific resource types.
	 * @export
	 * @interface LibrarySearchResponseResultsLibrarySongsSearchResult
	 */
	export interface LibrarySearchResponseResultsLibrarySongsSearchResult {
		/**
		 * 
		 * @type {Array<LibrarySongs>}
		 * @memberof LibrarySearchResponseResultsLibrarySongsSearchResult
		 */
		data: Array<LibrarySongs>;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySearchResponseResultsLibrarySongsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySearchResponseResultsLibrarySongsSearchResult
		 */
		next?: string;
	}
	/**
	 * A resource object that represents a library song.
	 * @export
	 * @interface LibrarySongs
	 */
	export interface LibrarySongs {
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongs
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongs
		 */
		type: LibrarySongsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongs
		 */
		href: string;
		/**
		 * 
		 * @type {LibrarySongsAttributes}
		 * @memberof LibrarySongs
		 */
		attributes?: LibrarySongsAttributes;
		/**
		 * 
		 * @type {LibrarySongsRelationships}
		 * @memberof LibrarySongs
		 */
		relationships?: LibrarySongsRelationships;
	}


	/**
	 * @export
	 */
	export const LibrarySongsTypeEnum = {
		LibrarySongs: 'library-songs'
	} as const;
	export type LibrarySongsTypeEnum = typeof LibrarySongsTypeEnum[keyof typeof LibrarySongsTypeEnum];

	/**
	 * The attributes for a library song resource.
	 * @export
	 * @interface LibrarySongsAttributes
	 */
	export interface LibrarySongsAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsAttributes
		 */
		albumName?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsAttributes
		 */
		artistName: string;
		/**
		 * 
		 * @type {Artwork}
		 * @memberof LibrarySongsAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsAttributes
		 */
		contentRating?: LibrarySongsAttributesContentRatingEnum;
		/**
		 * 
		 * @type {number}
		 * @memberof LibrarySongsAttributes
		 */
		discNumber?: number;
		/**
		 * 
		 * @type {number}
		 * @memberof LibrarySongsAttributes
		 */
		durationInMillis: number;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof LibrarySongsAttributes
		 */
		genreNames: Array<string>;
		/**
		 * 
		 * @type {boolean}
		 * @memberof LibrarySongsAttributes
		 */
		hasLyrics: boolean;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {PlayParameters}
		 * @memberof LibrarySongsAttributes
		 */
		playParams?: PlayParameters;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsAttributes
		 */
		releaseDate?: string;
		/**
		 * 
		 * @type {number}
		 * @memberof LibrarySongsAttributes
		 */
		trackNumber?: number;
	}


	/**
	 * @export
	 */
	export const LibrarySongsAttributesContentRatingEnum = {
		Clean: 'clean',
		Explicit: 'explicit'
	} as const;
	export type LibrarySongsAttributesContentRatingEnum = typeof LibrarySongsAttributesContentRatingEnum[keyof typeof LibrarySongsAttributesContentRatingEnum];

	/**
	 * The relationships for a library song resource.
	 * @export
	 * @interface LibrarySongsRelationships
	 */
	export interface LibrarySongsRelationships {
		/**
		 * 
		 * @type {LibrarySongsRelationshipsLibrarySongsAlbumsRelationship}
		 * @memberof LibrarySongsRelationships
		 */
		albums?: LibrarySongsRelationshipsLibrarySongsAlbumsRelationship;
		/**
		 * 
		 * @type {LibrarySongsRelationshipsLibrarySongsArtistsRelationship}
		 * @memberof LibrarySongsRelationships
		 */
		artists?: LibrarySongsRelationshipsLibrarySongsArtistsRelationship;
		/**
		 * 
		 * @type {LibrarySongsRelationshipsLibrarySongsCatalogRelationship}
		 * @memberof LibrarySongsRelationships
		 */
		catalog?: LibrarySongsRelationshipsLibrarySongsCatalogRelationship;
	}
	/**
	 * A relationship from the library song to its albums.
	 * @export
	 * @interface LibrarySongsRelationshipsLibrarySongsAlbumsRelationship
	 */
	export interface LibrarySongsRelationshipsLibrarySongsAlbumsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsRelationshipsLibrarySongsAlbumsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsRelationshipsLibrarySongsAlbumsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryAlbums>}
		 * @memberof LibrarySongsRelationshipsLibrarySongsAlbumsRelationship
		 */
		data: Array<LibraryAlbums>;
	}
	/**
	 * A relationship from the library song to its artists.
	 * @export
	 * @interface LibrarySongsRelationshipsLibrarySongsArtistsRelationship
	 */
	export interface LibrarySongsRelationshipsLibrarySongsArtistsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsRelationshipsLibrarySongsArtistsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsRelationshipsLibrarySongsArtistsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryArtists>}
		 * @memberof LibrarySongsRelationshipsLibrarySongsArtistsRelationship
		 */
		data: Array<LibraryArtists>;
	}
	/**
	 * A relationship from the library song to its associated catalog content.
	 * @export
	 * @interface LibrarySongsRelationshipsLibrarySongsCatalogRelationship
	 */
	export interface LibrarySongsRelationshipsLibrarySongsCatalogRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsRelationshipsLibrarySongsCatalogRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof LibrarySongsRelationshipsLibrarySongsCatalogRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Songs>}
		 * @memberof LibrarySongsRelationshipsLibrarySongsCatalogRelationship
		 */
		data: Array<Songs>;
	}
	/**
	 * The response to a library songs request.
	 * @export
	 * @interface LibrarySongsResponse
	 */
	export interface LibrarySongsResponse {
		/**
		 * 
		 * @type {Array<LibrarySongs>}
		 * @memberof LibrarySongsResponse
		 */
		data: Array<LibrarySongs>;
	}
	/**
	 * Information about an error that occurred while processing a request.
	 * @export
	 * @interface ModelError
	 */
	export interface ModelError {
		/**
		 * 
		 * @type {string}
		 * @memberof ModelError
		 */
		code: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ModelError
		 */
		detail?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ModelError
		 */
		id: string;
		/**
		 * 
		 * @type {ErrorSource}
		 * @memberof ModelError
		 */
		source?: ErrorSource;
		/**
		 * 
		 * @type {string}
		 * @memberof ModelError
		 */
		status: string;
		/**
		 * 
		 * @type {string}
		 * @memberof ModelError
		 */
		title: string;
	}
	/**
	 * A resource object that represents a music video.
	 * @export
	 * @interface MusicVideos
	 */
	export interface MusicVideos {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideos
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideos
		 */
		type: MusicVideosTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideos
		 */
		href: string;
		/**
		 * 
		 * @type {MusicVideosAttributes}
		 * @memberof MusicVideos
		 */
		attributes?: MusicVideosAttributes;
		/**
		 * 
		 * @type {MusicVideosRelationships}
		 * @memberof MusicVideos
		 */
		relationships?: MusicVideosRelationships;
		/**
		 * 
		 * @type {MusicVideosViews}
		 * @memberof MusicVideos
		 */
		views?: MusicVideosViews;
	}


	/**
	 * @export
	 */
	export const MusicVideosTypeEnum = {
		MusicVideos: 'music-videos'
	} as const;
	export type MusicVideosTypeEnum = typeof MusicVideosTypeEnum[keyof typeof MusicVideosTypeEnum];

	/**
	 * The attributes for a music video resource.
	 * @export
	 * @interface MusicVideosAttributes
	 */
	export interface MusicVideosAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		albumName?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		artistName: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		artistUrl?: string;
		/**
		 * 
		 * @type {Artwork}
		 * @memberof MusicVideosAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		contentRating?: MusicVideosAttributesContentRatingEnum;
		/**
		 * 
		 * @type {number}
		 * @memberof MusicVideosAttributes
		 */
		durationInMillis: number;
		/**
		 * 
		 * @type {EditorialNotes}
		 * @memberof MusicVideosAttributes
		 */
		editorialNotes?: EditorialNotes;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof MusicVideosAttributes
		 */
		genreNames: Array<string>;
		/**
		 * 
		 * @type {boolean}
		 * @memberof MusicVideosAttributes
		 */
		has4K: boolean;
		/**
		 * 
		 * @type {boolean}
		 * @memberof MusicVideosAttributes
		 */
		hasHDR: boolean;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		isrc?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {PlayParameters}
		 * @memberof MusicVideosAttributes
		 */
		playParams?: PlayParameters;
		/**
		 * 
		 * @type {Array<Preview>}
		 * @memberof MusicVideosAttributes
		 */
		previews: Array<Preview>;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		releaseDate?: string;
		/**
		 * 
		 * @type {number}
		 * @memberof MusicVideosAttributes
		 */
		trackNumber?: number;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		url: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		videoSubType?: MusicVideosAttributesVideoSubTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		workId?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosAttributes
		 */
		workName?: string;
	}


	/**
	 * @export
	 */
	export const MusicVideosAttributesContentRatingEnum = {
		Clean: 'clean',
		Explicit: 'explicit'
	} as const;
	export type MusicVideosAttributesContentRatingEnum = typeof MusicVideosAttributesContentRatingEnum[keyof typeof MusicVideosAttributesContentRatingEnum];

	/**
	 * @export
	 */
	export const MusicVideosAttributesVideoSubTypeEnum = {
		Preview: 'preview'
	} as const;
	export type MusicVideosAttributesVideoSubTypeEnum = typeof MusicVideosAttributesVideoSubTypeEnum[keyof typeof MusicVideosAttributesVideoSubTypeEnum];

	/**
	 * The relationships for a music video resource.
	 * @export
	 * @interface MusicVideosRelationships
	 */
	export interface MusicVideosRelationships {
		/**
		 * 
		 * @type {MusicVideosRelationshipsMusicVideosAlbumsRelationship}
		 * @memberof MusicVideosRelationships
		 */
		albums?: MusicVideosRelationshipsMusicVideosAlbumsRelationship;
		/**
		 * 
		 * @type {MusicVideosRelationshipsMusicVideosArtistsRelationship}
		 * @memberof MusicVideosRelationships
		 */
		artists?: MusicVideosRelationshipsMusicVideosArtistsRelationship;
		/**
		 * 
		 * @type {MusicVideosRelationshipsMusicVideosGenresRelationship}
		 * @memberof MusicVideosRelationships
		 */
		genres?: MusicVideosRelationshipsMusicVideosGenresRelationship;
		/**
		 * 
		 * @type {MusicVideosRelationshipsMusicVideosLibraryRelationship}
		 * @memberof MusicVideosRelationships
		 */
		library?: MusicVideosRelationshipsMusicVideosLibraryRelationship;
		/**
		 * 
		 * @type {MusicVideosRelationshipsMusicVideosSongsRelationship}
		 * @memberof MusicVideosRelationships
		 */
		songs?: MusicVideosRelationshipsMusicVideosSongsRelationship;
	}
	/**
	 * A relationship from the music video to its albums.
	 * @export
	 * @interface MusicVideosRelationshipsMusicVideosAlbumsRelationship
	 */
	export interface MusicVideosRelationshipsMusicVideosAlbumsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosRelationshipsMusicVideosAlbumsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosRelationshipsMusicVideosAlbumsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof MusicVideosRelationshipsMusicVideosAlbumsRelationship
		 */
		data: Array<Albums>;
	}
	/**
	 * A relationship from the music video to its artists.
	 * @export
	 * @interface MusicVideosRelationshipsMusicVideosArtistsRelationship
	 */
	export interface MusicVideosRelationshipsMusicVideosArtistsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosRelationshipsMusicVideosArtistsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosRelationshipsMusicVideosArtistsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Artists>}
		 * @memberof MusicVideosRelationshipsMusicVideosArtistsRelationship
		 */
		data: Array<Artists>;
	}
	/**
	 * A relationship from the music video to its genres.
	 * @export
	 * @interface MusicVideosRelationshipsMusicVideosGenresRelationship
	 */
	export interface MusicVideosRelationshipsMusicVideosGenresRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosRelationshipsMusicVideosGenresRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosRelationshipsMusicVideosGenresRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Genres>}
		 * @memberof MusicVideosRelationshipsMusicVideosGenresRelationship
		 */
		data: Array<Genres>;
	}
	/**
	 * A relationship from the music video to its library.
	 * @export
	 * @interface MusicVideosRelationshipsMusicVideosLibraryRelationship
	 */
	export interface MusicVideosRelationshipsMusicVideosLibraryRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosRelationshipsMusicVideosLibraryRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosRelationshipsMusicVideosLibraryRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryMusicVideos>}
		 * @memberof MusicVideosRelationshipsMusicVideosLibraryRelationship
		 */
		data: Array<LibraryMusicVideos>;
	}
	/**
	 * A relationship from the music video to its songs.
	 * @export
	 * @interface MusicVideosRelationshipsMusicVideosSongsRelationship
	 */
	export interface MusicVideosRelationshipsMusicVideosSongsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosRelationshipsMusicVideosSongsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosRelationshipsMusicVideosSongsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Songs>}
		 * @memberof MusicVideosRelationshipsMusicVideosSongsRelationship
		 */
		data: Array<Songs>;
	}
	/**
	 * The response to a music videos request.
	 * @export
	 * @interface MusicVideosResponse
	 */
	export interface MusicVideosResponse {
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof MusicVideosResponse
		 */
		data: Array<MusicVideos>;
	}
	/**
	 * The views for a music video resource.
	 * @export
	 * @interface MusicVideosViews
	 */
	export interface MusicVideosViews {
		/**
		 * 
		 * @type {MusicVideosViewsMusicVideosMoreByArtistView}
		 * @memberof MusicVideosViews
		 */
		moreByArtist?: MusicVideosViewsMusicVideosMoreByArtistView;
		/**
		 * 
		 * @type {MusicVideosViewsMusicVideosMoreInGenreView}
		 * @memberof MusicVideosViews
		 */
		moreInGenre?: MusicVideosViewsMusicVideosMoreInGenreView;
	}
	/**
	 * A relationship view from this music video to more music videos of various types by the artist.
	 * @export
	 * @interface MusicVideosViewsMusicVideosMoreByArtistView
	 */
	export interface MusicVideosViewsMusicVideosMoreByArtistView {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosViewsMusicVideosMoreByArtistView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosViewsMusicVideosMoreByArtistView
		 */
		next?: string;
		/**
		 * 
		 * @type {MusicVideosViewsMusicVideosMoreByArtistViewAttributes}
		 * @memberof MusicVideosViewsMusicVideosMoreByArtistView
		 */
		attributes: MusicVideosViewsMusicVideosMoreByArtistViewAttributes;
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof MusicVideosViewsMusicVideosMoreByArtistView
		 */
		data: Array<MusicVideos>;
	}
	/**
	 * More content of some other type by the artist.
	 * @export
	 * @interface MusicVideosViewsMusicVideosMoreByArtistViewAttributes
	 */
	export interface MusicVideosViewsMusicVideosMoreByArtistViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosViewsMusicVideosMoreByArtistViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this music video to more music videos in a specific music video genre.
	 * @export
	 * @interface MusicVideosViewsMusicVideosMoreInGenreView
	 */
	export interface MusicVideosViewsMusicVideosMoreInGenreView {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosViewsMusicVideosMoreInGenreView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosViewsMusicVideosMoreInGenreView
		 */
		next?: string;
		/**
		 * 
		 * @type {MusicVideosViewsMusicVideosMoreInGenreViewAttributes}
		 * @memberof MusicVideosViewsMusicVideosMoreInGenreView
		 */
		attributes: MusicVideosViewsMusicVideosMoreInGenreViewAttributes;
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof MusicVideosViewsMusicVideosMoreInGenreView
		 */
		data: Array<MusicVideos>;
	}
	/**
	 * More music videos in a specific music video genre.
	 * @export
	 * @interface MusicVideosViewsMusicVideosMoreInGenreViewAttributes
	 */
	export interface MusicVideosViewsMusicVideosMoreInGenreViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof MusicVideosViewsMusicVideosMoreInGenreViewAttributes
		 */
		title: string;
	}
	/**
	 * A response object composed of paginated resource objects for the request.
	 * @export
	 * @interface PaginatedResourceCollectionResponse
	 */
	export interface PaginatedResourceCollectionResponse {
		/**
		 * 
		 * @type {string}
		 * @memberof PaginatedResourceCollectionResponse
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Resource>}
		 * @memberof PaginatedResourceCollectionResponse
		 */
		data: Array<Resource>;
	}
	/**
	 * A resource object that represents recommended resources for a user calculated using their selected preferences.
	 * @export
	 * @interface PersonalRecommendation
	 */
	export interface PersonalRecommendation {
		/**
		 * 
		 * @type {string}
		 * @memberof PersonalRecommendation
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PersonalRecommendation
		 */
		type: PersonalRecommendationTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof PersonalRecommendation
		 */
		href: string;
		/**
		 * 
		 * @type {PersonalRecommendationAttributes}
		 * @memberof PersonalRecommendation
		 */
		attributes?: PersonalRecommendationAttributes;
		/**
		 * 
		 * @type {PersonalRecommendationRelationships}
		 * @memberof PersonalRecommendation
		 */
		relationships?: PersonalRecommendationRelationships;
	}


	/**
	 * @export
	 */
	export const PersonalRecommendationTypeEnum = {
		PersonalRecommendation: 'personal-recommendation'
	} as const;
	export type PersonalRecommendationTypeEnum = typeof PersonalRecommendationTypeEnum[keyof typeof PersonalRecommendationTypeEnum];

	/**
	 * The attributes for a recommendation resource.
	 * @export
	 * @interface PersonalRecommendationAttributes
	 */
	export interface PersonalRecommendationAttributes {
		/**
		 * 
		 * @type {boolean}
		 * @memberof PersonalRecommendationAttributes
		 */
		isGroupRecommendation: boolean;
		/**
		 * 
		 * @type {string}
		 * @memberof PersonalRecommendationAttributes
		 */
		kind: PersonalRecommendationAttributesKindEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof PersonalRecommendationAttributes
		 */
		nextUpdateDate: string;
		/**
		 * 
		 * @type {PersonalRecommendationAttributesReason}
		 * @memberof PersonalRecommendationAttributes
		 */
		reason?: PersonalRecommendationAttributesReason;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof PersonalRecommendationAttributes
		 */
		resourceTypes: Array<string>;
		/**
		 * 
		 * @type {PersonalRecommendationAttributesTitle}
		 * @memberof PersonalRecommendationAttributes
		 */
		title?: PersonalRecommendationAttributesTitle;
	}


	/**
	 * @export
	 */
	export const PersonalRecommendationAttributesKindEnum = {
		MusicRecommendations: 'music-recommendations',
		RecentlyPlayed: 'recently-played',
		Unknown: 'unknown'
	} as const;
	export type PersonalRecommendationAttributesKindEnum = typeof PersonalRecommendationAttributesKindEnum[keyof typeof PersonalRecommendationAttributesKindEnum];

	/**
	 * An object that represents the reason for a personal recommendation.
	 * @export
	 * @interface PersonalRecommendationAttributesReason
	 */
	export interface PersonalRecommendationAttributesReason {
		/**
		 * 
		 * @type {string}
		 * @memberof PersonalRecommendationAttributesReason
		 */
		stringForDisplay: string;
	}
	/**
	 * An object that represents the title of a personal recommendation.
	 * @export
	 * @interface PersonalRecommendationAttributesTitle
	 */
	export interface PersonalRecommendationAttributesTitle {
		/**
		 * 
		 * @type {string}
		 * @memberof PersonalRecommendationAttributesTitle
		 */
		stringForDisplay: string;
	}
	/**
	 * The relationships for a recommendation resource.
	 * @export
	 * @interface PersonalRecommendationRelationships
	 */
	export interface PersonalRecommendationRelationships {
		/**
		 * 
		 * @type {PersonalRecommendationRelationshipsPersonalRecommendationContentsRelationship}
		 * @memberof PersonalRecommendationRelationships
		 */
		contents?: PersonalRecommendationRelationshipsPersonalRecommendationContentsRelationship;
	}
	/**
	 * A relationship from the recommendation to its recommended content.
	 * @export
	 * @interface PersonalRecommendationRelationshipsPersonalRecommendationContentsRelationship
	 */
	export interface PersonalRecommendationRelationshipsPersonalRecommendationContentsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof PersonalRecommendationRelationshipsPersonalRecommendationContentsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PersonalRecommendationRelationshipsPersonalRecommendationContentsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Resource>}
		 * @memberof PersonalRecommendationRelationshipsPersonalRecommendationContentsRelationship
		 */
		data: Array<Resource>;
	}
	/**
	 * The response to a request for personal recommendations.
	 * @export
	 * @interface PersonalRecommendationResponse
	 */
	export interface PersonalRecommendationResponse {
		/**
		 * 
		 * @type {Array<PersonalRecommendation>}
		 * @memberof PersonalRecommendationResponse
		 */
		data: Array<PersonalRecommendation>;
	}
	/**
	 * An object that represents play parameters for resources.
	 * @export
	 * @interface PlayParameters
	 */
	export interface PlayParameters {
		/**
		 * 
		 * @type {string}
		 * @memberof PlayParameters
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PlayParameters
		 */
		kind: string;
	}
	/**
	 * A resource object that represents a playlist.
	 * @export
	 * @interface Playlists
	 */
	export interface Playlists {
		/**
		 * 
		 * @type {string}
		 * @memberof Playlists
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Playlists
		 */
		type: PlaylistsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof Playlists
		 */
		href: string;
		/**
		 * 
		 * @type {PlaylistsAttributes}
		 * @memberof Playlists
		 */
		attributes?: PlaylistsAttributes;
		/**
		 * 
		 * @type {PlaylistsRelationships}
		 * @memberof Playlists
		 */
		relationships?: PlaylistsRelationships;
		/**
		 * 
		 * @type {PlaylistsViews}
		 * @memberof Playlists
		 */
		views?: PlaylistsViews;
	}


	/**
	 * @export
	 */
	export const PlaylistsTypeEnum = {
		Playlists: 'playlists'
	} as const;
	export type PlaylistsTypeEnum = typeof PlaylistsTypeEnum[keyof typeof PlaylistsTypeEnum];

	/**
	 * The attributes for a playlist resource.
	 * @export
	 * @interface PlaylistsAttributes
	 */
	export interface PlaylistsAttributes {
		/**
		 * 
		 * @type {Artwork}
		 * @memberof PlaylistsAttributes
		 */
		artwork?: Artwork;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsAttributes
		 */
		curatorName: string;
		/**
		 * 
		 * @type {DescriptionAttribute}
		 * @memberof PlaylistsAttributes
		 */
		description?: DescriptionAttribute;
		/**
		 * 
		 * @type {boolean}
		 * @memberof PlaylistsAttributes
		 */
		isChart: boolean;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsAttributes
		 */
		lastModifiedDate?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsAttributes
		 */
		playlistType: PlaylistsAttributesPlaylistTypeEnum;
		/**
		 * 
		 * @type {PlayParameters}
		 * @memberof PlaylistsAttributes
		 */
		playParams?: PlayParameters;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsAttributes
		 */
		url: string;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof PlaylistsAttributes
		 */
		trackTypes?: Array<string>;
	}


	/**
	 * @export
	 */
	export const PlaylistsAttributesPlaylistTypeEnum = {
		Editorial: 'editorial',
		External: 'external',
		PersonalMix: 'personal-mix',
		Replay: 'replay',
		UserShared: 'user-shared'
	} as const;
	export type PlaylistsAttributesPlaylistTypeEnum = typeof PlaylistsAttributesPlaylistTypeEnum[keyof typeof PlaylistsAttributesPlaylistTypeEnum];

	/**
	 * The relationships for a playlist resource.
	 * @export
	 * @interface PlaylistsRelationships
	 */
	export interface PlaylistsRelationships {
		/**
		 * 
		 * @type {PlaylistsRelationshipsPlaylistsCuratorRelationship}
		 * @memberof PlaylistsRelationships
		 */
		curator?: PlaylistsRelationshipsPlaylistsCuratorRelationship;
		/**
		 * 
		 * @type {PlaylistsRelationshipsPlaylistsLibraryRelationship}
		 * @memberof PlaylistsRelationships
		 */
		library?: PlaylistsRelationshipsPlaylistsLibraryRelationship;
		/**
		 * 
		 * @type {PlaylistsRelationshipsPlaylistsTracksRelationship}
		 * @memberof PlaylistsRelationships
		 */
		tracks?: PlaylistsRelationshipsPlaylistsTracksRelationship;
	}
	/**
	 * A relationship from the playlist to its curator.
	 * @export
	 * @interface PlaylistsRelationshipsPlaylistsCuratorRelationship
	 */
	export interface PlaylistsRelationshipsPlaylistsCuratorRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsCuratorRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsCuratorRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInner>}
		 * @memberof PlaylistsRelationshipsPlaylistsCuratorRelationship
		 */
		data: Array<PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInner>;
	}
	/**
	 * 
	 * @export
	 * @interface PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInner
	 */
	export interface PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInner {
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInner
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInner
		 */
		type: PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInnerTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInner
		 */
		href: string;
		/**
		 * 
		 * @type {CuratorsAttributes}
		 * @memberof PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInner
		 */
		attributes?: CuratorsAttributes;
		/**
		 * 
		 * @type {CuratorsRelationships}
		 * @memberof PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInner
		 */
		relationships?: CuratorsRelationships;
	}


	/**
	 * @export
	 */
	export const PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInnerTypeEnum = {
		Curators: 'curators'
	} as const;
	export type PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInnerTypeEnum = typeof PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInnerTypeEnum[keyof typeof PlaylistsRelationshipsPlaylistsCuratorRelationshipDataInnerTypeEnum];

	/**
	 * A relationship from the playlist to its library.
	 * @export
	 * @interface PlaylistsRelationshipsPlaylistsLibraryRelationship
	 */
	export interface PlaylistsRelationshipsPlaylistsLibraryRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsLibraryRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsLibraryRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibraryPlaylists>}
		 * @memberof PlaylistsRelationshipsPlaylistsLibraryRelationship
		 */
		data: Array<LibraryPlaylists>;
	}
	/**
	 * A relationship from the playlist to its tracks. 
	 * @export
	 * @interface PlaylistsRelationshipsPlaylistsTracksRelationship
	 */
	export interface PlaylistsRelationshipsPlaylistsTracksRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsTracksRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsTracksRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner>}
		 * @memberof PlaylistsRelationshipsPlaylistsTracksRelationship
		 */
		data: Array<PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner>;
	}
	/**
	 * 
	 * @export
	 * @interface PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner
	 */
	export interface PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner {
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner
		 */
		type: PlaylistsRelationshipsPlaylistsTracksRelationshipDataInnerTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner
		 */
		href: string;
		/**
		 * 
		 * @type {SongsAttributes}
		 * @memberof PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner
		 */
		attributes?: SongsAttributes;
		/**
		 * 
		 * @type {SongsRelationships}
		 * @memberof PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner
		 */
		relationships?: SongsRelationships;
		/**
		 * 
		 * @type {MusicVideosViews}
		 * @memberof PlaylistsRelationshipsPlaylistsTracksRelationshipDataInner
		 */
		views?: MusicVideosViews;
	}


	/**
	 * @export
	 */
	export const PlaylistsRelationshipsPlaylistsTracksRelationshipDataInnerTypeEnum = {
		Songs: 'songs'
	} as const;
	export type PlaylistsRelationshipsPlaylistsTracksRelationshipDataInnerTypeEnum = typeof PlaylistsRelationshipsPlaylistsTracksRelationshipDataInnerTypeEnum[keyof typeof PlaylistsRelationshipsPlaylistsTracksRelationshipDataInnerTypeEnum];

	/**
	 * The response to a playlists request.
	 * @export
	 * @interface PlaylistsResponse
	 */
	export interface PlaylistsResponse {
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof PlaylistsResponse
		 */
		data: Array<Playlists>;
	}
	/**
	 * The views for a music video resource.
	 * @export
	 * @interface PlaylistsViews
	 */
	export interface PlaylistsViews {
		/**
		 * 
		 * @type {PlaylistsViewsPlaylistsFeaturedArtistsView}
		 * @memberof PlaylistsViews
		 */
		featuredArtists?: PlaylistsViewsPlaylistsFeaturedArtistsView;
		/**
		 * 
		 * @type {PlaylistsViewsPlaylistsMoreByCuratorView}
		 * @memberof PlaylistsViews
		 */
		moreByCurator?: PlaylistsViewsPlaylistsMoreByCuratorView;
	}
	/**
	 * Artists that are featured on this playlist.
	 * @export
	 * @interface PlaylistsViewsPlaylistsFeaturedArtistsView
	 */
	export interface PlaylistsViewsPlaylistsFeaturedArtistsView {
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsViewsPlaylistsFeaturedArtistsView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsViewsPlaylistsFeaturedArtistsView
		 */
		next?: string;
		/**
		 * 
		 * @type {PlaylistsViewsPlaylistsFeaturedArtistsViewAttributes}
		 * @memberof PlaylistsViewsPlaylistsFeaturedArtistsView
		 */
		attributes: PlaylistsViewsPlaylistsFeaturedArtistsViewAttributes;
		/**
		 * 
		 * @type {Array<Artists>}
		 * @memberof PlaylistsViewsPlaylistsFeaturedArtistsView
		 */
		data: Array<Artists>;
	}
	/**
	 * Attribute metadata for the playlist featured artists view.
	 * @export
	 * @interface PlaylistsViewsPlaylistsFeaturedArtistsViewAttributes
	 */
	export interface PlaylistsViewsPlaylistsFeaturedArtistsViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsViewsPlaylistsFeaturedArtistsViewAttributes
		 */
		title: string;
	}
	/**
	 * Additional content by the same curator for this playlist.
	 * @export
	 * @interface PlaylistsViewsPlaylistsMoreByCuratorView
	 */
	export interface PlaylistsViewsPlaylistsMoreByCuratorView {
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsViewsPlaylistsMoreByCuratorView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsViewsPlaylistsMoreByCuratorView
		 */
		next?: string;
		/**
		 * 
		 * @type {PlaylistsViewsPlaylistsMoreByCuratorViewAttributes}
		 * @memberof PlaylistsViewsPlaylistsMoreByCuratorView
		 */
		attributes: PlaylistsViewsPlaylistsMoreByCuratorViewAttributes;
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof PlaylistsViewsPlaylistsMoreByCuratorView
		 */
		data: Array<Playlists>;
	}
	/**
	 * Attribute metadata for the view containing additional content by the same curator for this playlist.
	 * @export
	 * @interface PlaylistsViewsPlaylistsMoreByCuratorViewAttributes
	 */
	export interface PlaylistsViewsPlaylistsMoreByCuratorViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof PlaylistsViewsPlaylistsMoreByCuratorViewAttributes
		 */
		title: string;
	}
	/**
	 * An object that represents a preview for resources.
	 * @export
	 * @interface Preview
	 */
	export interface Preview {
		/**
		 * 
		 * @type {Artwork}
		 * @memberof Preview
		 */
		artwork?: Artwork;
		/**
		 * 
		 * @type {string}
		 * @memberof Preview
		 */
		url: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Preview
		 */
		hlsUrl?: string;
	}
	/**
	 * A request containing the data for a rating.
	 * @export
	 * @interface RatingRequest
	 */
	export interface RatingRequest {
		/**
		 * 
		 * @type {RatingRequestAttributes}
		 * @memberof RatingRequest
		 */
		attributes: RatingRequestAttributes;
		/**
		 * 
		 * @type {string}
		 * @memberof RatingRequest
		 */
		type: RatingRequestTypeEnum;
	}


	/**
	 * @export
	 */
	export const RatingRequestTypeEnum = {
		Ratings: 'ratings'
	} as const;
	export type RatingRequestTypeEnum = typeof RatingRequestTypeEnum[keyof typeof RatingRequestTypeEnum];

	/**
	 * The attributes for a rating request object.
	 * @export
	 * @interface RatingRequestAttributes
	 */
	export interface RatingRequestAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof RatingRequestAttributes
		 */
		value: RatingRequestAttributesValueEnum;
	}


	/**
	 * @export
	 */
	export const RatingRequestAttributesValueEnum = {
		_1: '-1',
		_1: '1'
	} as const;
	export type RatingRequestAttributesValueEnum = typeof RatingRequestAttributesValueEnum[keyof typeof RatingRequestAttributesValueEnum];

	/**
	 * An object that represents a rating for a resource.
	 * @export
	 * @interface Ratings
	 */
	export interface Ratings {
		/**
		 * 
		 * @type {string}
		 * @memberof Ratings
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Ratings
		 */
		type: RatingsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof Ratings
		 */
		href: string;
		/**
		 * 
		 * @type {RatingsAttributes}
		 * @memberof Ratings
		 */
		attributes?: RatingsAttributes;
		/**
		 * 
		 * @type {RatingsRelationships}
		 * @memberof Ratings
		 */
		relationships?: RatingsRelationships;
	}


	/**
	 * @export
	 */
	export const RatingsTypeEnum = {
		Ratings: 'ratings'
	} as const;
	export type RatingsTypeEnum = typeof RatingsTypeEnum[keyof typeof RatingsTypeEnum];

	/**
	 * The attributes for a rating resource.
	 * @export
	 * @interface RatingsAttributes
	 */
	export interface RatingsAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof RatingsAttributes
		 */
		value?: RatingsAttributesValueEnum;
	}


	/**
	 * @export
	 */
	export const RatingsAttributesValueEnum = {
		_1: '-1',
		_1: '1'
	} as const;
	export type RatingsAttributesValueEnum = typeof RatingsAttributesValueEnum[keyof typeof RatingsAttributesValueEnum];

	/**
	 * The relationships for a rating resource.
	 * @export
	 * @interface RatingsRelationships
	 */
	export interface RatingsRelationships {
		/**
		 * 
		 * @type {RatingsRelationshipsRatingsContentRelationship}
		 * @memberof RatingsRelationships
		 */
		content?: RatingsRelationshipsRatingsContentRelationship;
	}
	/**
	 * A relationship between the rating and the assocaited content.
	 * @export
	 * @interface RatingsRelationshipsRatingsContentRelationship
	 */
	export interface RatingsRelationshipsRatingsContentRelationship {
		/**
		 * 
		 * @type {Array<RatingsRelationshipsRatingsContentRelationshipDataInner>}
		 * @memberof RatingsRelationshipsRatingsContentRelationship
		 */
		data: Array<RatingsRelationshipsRatingsContentRelationshipDataInner>;
		/**
		 * 
		 * @type {string}
		 * @memberof RatingsRelationshipsRatingsContentRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof RatingsRelationshipsRatingsContentRelationship
		 */
		next?: string;
	}
	/**
	 * 
	 * @export
	 * @interface RatingsRelationshipsRatingsContentRelationshipDataInner
	 */
	export interface RatingsRelationshipsRatingsContentRelationshipDataInner {
		/**
		 * 
		 * @type {string}
		 * @memberof RatingsRelationshipsRatingsContentRelationshipDataInner
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof RatingsRelationshipsRatingsContentRelationshipDataInner
		 */
		type: RatingsRelationshipsRatingsContentRelationshipDataInnerTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof RatingsRelationshipsRatingsContentRelationshipDataInner
		 */
		href: string;
		/**
		 * 
		 * @type {StationsAttributes}
		 * @memberof RatingsRelationshipsRatingsContentRelationshipDataInner
		 */
		attributes?: StationsAttributes;
		/**
		 * 
		 * @type {StationsRelationships}
		 * @memberof RatingsRelationshipsRatingsContentRelationshipDataInner
		 */
		relationships?: StationsRelationships;
		/**
		 * 
		 * @type {PlaylistsViews}
		 * @memberof RatingsRelationshipsRatingsContentRelationshipDataInner
		 */
		views?: PlaylistsViews;
	}


	/**
	 * @export
	 */
	export const RatingsRelationshipsRatingsContentRelationshipDataInnerTypeEnum = {
		Stations: 'stations'
	} as const;
	export type RatingsRelationshipsRatingsContentRelationshipDataInnerTypeEnum = typeof RatingsRelationshipsRatingsContentRelationshipDataInnerTypeEnum[keyof typeof RatingsRelationshipsRatingsContentRelationshipDataInnerTypeEnum];

	/**
	 * The response to a request for a rating.
	 * @export
	 * @interface RatingsResponse
	 */
	export interface RatingsResponse {
		/**
		 * 
		 * @type {Array<Ratings>}
		 * @memberof RatingsResponse
		 */
		data: Array<Ratings>;
	}
	/**
	 * A resource object that represents a record label.
	 * @export
	 * @interface RecordLabels
	 */
	export interface RecordLabels {
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabels
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabels
		 */
		type: RecordLabelsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabels
		 */
		href: string;
		/**
		 * 
		 * @type {RecordLabelsAttributes}
		 * @memberof RecordLabels
		 */
		attributes?: RecordLabelsAttributes;
		/**
		 * 
		 * @type {RecordLabelsViews}
		 * @memberof RecordLabels
		 */
		views?: RecordLabelsViews;
	}


	/**
	 * @export
	 */
	export const RecordLabelsTypeEnum = {
		RecordLabels: 'record-labels'
	} as const;
	export type RecordLabelsTypeEnum = typeof RecordLabelsTypeEnum[keyof typeof RecordLabelsTypeEnum];

	/**
	 * The attributes for a record label resource.
	 * @export
	 * @interface RecordLabelsAttributes
	 */
	export interface RecordLabelsAttributes {
		/**
		 * 
		 * @type {Artwork}
		 * @memberof RecordLabelsAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {DescriptionAttribute}
		 * @memberof RecordLabelsAttributes
		 */
		description?: DescriptionAttribute;
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabelsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabelsAttributes
		 */
		url: string;
	}
	/**
	 * The response to a request for record labels.
	 * @export
	 * @interface RecordLabelsResponse
	 */
	export interface RecordLabelsResponse {
		/**
		 * 
		 * @type {Array<RecordLabels>}
		 * @memberof RecordLabelsResponse
		 */
		data: Array<RecordLabels>;
	}
	/**
	 * The relationship views for a record label resource.
	 * @export
	 * @interface RecordLabelsViews
	 */
	export interface RecordLabelsViews {
		/**
		 * 
		 * @type {RecordLabelsViewsRecordLabelsLatestReleasesView}
		 * @memberof RecordLabelsViews
		 */
		latestReleases?: RecordLabelsViewsRecordLabelsLatestReleasesView;
		/**
		 * 
		 * @type {RecordLabelsViewsRecordLabelsTopReleasesView}
		 * @memberof RecordLabelsViews
		 */
		topReleases?: RecordLabelsViewsRecordLabelsTopReleasesView;
	}
	/**
	 * A relationship view from this record label to a selection of its latest releases.
	 * @export
	 * @interface RecordLabelsViewsRecordLabelsLatestReleasesView
	 */
	export interface RecordLabelsViewsRecordLabelsLatestReleasesView {
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabelsViewsRecordLabelsLatestReleasesView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabelsViewsRecordLabelsLatestReleasesView
		 */
		next?: string;
		/**
		 * 
		 * @type {RecordLabelsViewsRecordLabelsLatestReleasesViewAttributes}
		 * @memberof RecordLabelsViewsRecordLabelsLatestReleasesView
		 */
		attributes: RecordLabelsViewsRecordLabelsLatestReleasesViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof RecordLabelsViewsRecordLabelsLatestReleasesView
		 */
		data: Array<Albums>;
	}
	/**
	 * The attributes for the record label latest releases view.
	 * @export
	 * @interface RecordLabelsViewsRecordLabelsLatestReleasesViewAttributes
	 */
	export interface RecordLabelsViewsRecordLabelsLatestReleasesViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabelsViewsRecordLabelsLatestReleasesViewAttributes
		 */
		title: string;
	}
	/**
	 * A relationship view from this record label to a selection of its top releases.
	 * @export
	 * @interface RecordLabelsViewsRecordLabelsTopReleasesView
	 */
	export interface RecordLabelsViewsRecordLabelsTopReleasesView {
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabelsViewsRecordLabelsTopReleasesView
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabelsViewsRecordLabelsTopReleasesView
		 */
		next?: string;
		/**
		 * 
		 * @type {RecordLabelsViewsRecordLabelsTopReleasesViewAttributes}
		 * @memberof RecordLabelsViewsRecordLabelsTopReleasesView
		 */
		attributes: RecordLabelsViewsRecordLabelsTopReleasesViewAttributes;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof RecordLabelsViewsRecordLabelsTopReleasesView
		 */
		data: Array<Albums>;
	}
	/**
	 * The attributes for the record label top releases view.
	 * @export
	 * @interface RecordLabelsViewsRecordLabelsTopReleasesViewAttributes
	 */
	export interface RecordLabelsViewsRecordLabelsTopReleasesViewAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof RecordLabelsViewsRecordLabelsTopReleasesViewAttributes
		 */
		title: string;
	}
	/**
	 * A to-one or to-many relationship from one resource object to others.
	 * @export
	 * @interface Relationship
	 */
	export interface Relationship {
		/**
		 * 
		 * @type {string}
		 * @memberof Relationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Relationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Resource>}
		 * @memberof Relationship
		 */
		data: Array<Resource>;
		/**
		 * Information about the request or response.
		 * @type {any}
		 * @memberof Relationship
		 */
		meta?: any | null;
	}
	/**
	 * The response for a direct resource relationship fetch.
	 * @export
	 * @interface RelationshipResponse
	 */
	export interface RelationshipResponse {
		/**
		 * 
		 * @type {Array<Resource>}
		 * @memberof RelationshipResponse
		 */
		data: Array<Resource>;
		/**
		 * Contextual data about the relationship.
		 * @type {any}
		 * @memberof RelationshipResponse
		 */
		meta?: any | null;
		/**
		 * 
		 * @type {string}
		 * @memberof RelationshipResponse
		 */
		next?: string;
	}
	/**
	 * The response for a direct resource view fetch.
	 * @export
	 * @interface RelationshipViewResponse
	 */
	export interface RelationshipViewResponse {
		/**
		 * The attribute metadata for the view.
		 * @type {any}
		 * @memberof RelationshipViewResponse
		 */
		attributes?: any | null;
		/**
		 * 
		 * @type {Array<Resource>}
		 * @memberof RelationshipViewResponse
		 */
		data: Array<Resource>;
		/**
		 * Contextual data about the view.
		 * @type {any}
		 * @memberof RelationshipViewResponse
		 */
		meta?: any | null;
		/**
		 * 
		 * @type {string}
		 * @memberof RelationshipViewResponse
		 */
		next?: string;
	}
	/**
	 * A resource—such as an album, song, or playlist.
	 * @export
	 * @interface Resource
	 */
	export interface Resource {
		/**
		 * 
		 * @type {string}
		 * @memberof Resource
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Resource
		 */
		type: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Resource
		 */
		href?: string;
		/**
		 * Attributes representing the metadata of the resource.
		 * @type {any}
		 * @memberof Resource
		 */
		attributes?: any | null;
		/**
		 * 
		 * @type {ResourceRelationships}
		 * @memberof Resource
		 */
		relationships?: ResourceRelationships;
		/**
		 * Information about the request or response.
		 * @type {any}
		 * @memberof Resource
		 */
		meta?: any | null;
		/**
		 * 
		 * @type {ResourceViews}
		 * @memberof Resource
		 */
		views?: ResourceViews;
	}
	/**
	 * A response object composed of resource objects for the request.
	 * @export
	 * @interface ResourceCollectionResponse
	 */
	export interface ResourceCollectionResponse {
		/**
		 * 
		 * @type {Array<Resource>}
		 * @memberof ResourceCollectionResponse
		 */
		data: Array<Resource>;
	}
	/**
	 * Relationships belonging to the resource.
	 * @export
	 * @interface ResourceRelationships
	 */
	export interface ResourceRelationships {
		/**
		 * 
		 * @type {Relationship}
		 * @memberof ResourceRelationships
		 */
		anyKey?: Relationship;
	}
	/**
	 * Views belonging to the resource.
	 * @export
	 * @interface ResourceViews
	 */
	export interface ResourceViews {
		/**
		 * 
		 * @type {View}
		 * @memberof ResourceViews
		 */
		anyKey?: View;
	}
	/**
	 * The response to a request for search hints.
	 * @export
	 * @interface SearchHintsResponse
	 */
	export interface SearchHintsResponse {
		/**
		 * 
		 * @type {SearchHintsResponseResults}
		 * @memberof SearchHintsResponse
		 */
		results: SearchHintsResponseResults;
	}
	/**
	 * An object that represents the autocomplete options for the hint.
	 * @export
	 * @interface SearchHintsResponseResults
	 */
	export interface SearchHintsResponseResults {
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof SearchHintsResponseResults
		 */
		terms: Array<string>;
	}
	/**
	 * The response to a search request.
	 * @export
	 * @interface SearchResponse
	 */
	export interface SearchResponse {
		/**
		 * 
		 * @type {SearchResponseResults}
		 * @memberof SearchResponse
		 */
		results: SearchResponseResults;
	}
	/**
	 * An object that represents the results of a catalog search query.
	 * @export
	 * @interface SearchResponseResults
	 */
	export interface SearchResponseResults {
		/**
		 * 
		 * @type {SearchResponseResultsActivitiesSearchResult}
		 * @memberof SearchResponseResults
		 */
		activities?: SearchResponseResultsActivitiesSearchResult;
		/**
		 * 
		 * @type {SearchResponseResultsAlbumsSearchResult}
		 * @memberof SearchResponseResults
		 */
		albums?: SearchResponseResultsAlbumsSearchResult;
		/**
		 * 
		 * @type {SearchResponseResultsAppleCuratorsSearchResult}
		 * @memberof SearchResponseResults
		 */
		appleCurators?: SearchResponseResultsAppleCuratorsSearchResult;
		/**
		 * 
		 * @type {SearchResponseResultsArtistsSearchResult}
		 * @memberof SearchResponseResults
		 */
		artists?: SearchResponseResultsArtistsSearchResult;
		/**
		 * 
		 * @type {SearchResponseResultsCuratorsSearchResult}
		 * @memberof SearchResponseResults
		 */
		curators?: SearchResponseResultsCuratorsSearchResult;
		/**
		 * 
		 * @type {SearchResponseResultsMusicVideosSearchResult}
		 * @memberof SearchResponseResults
		 */
		musicVideos?: SearchResponseResultsMusicVideosSearchResult;
		/**
		 * 
		 * @type {SearchResponseResultsPlaylistsSearchResult}
		 * @memberof SearchResponseResults
		 */
		playlists?: SearchResponseResultsPlaylistsSearchResult;
		/**
		 * 
		 * @type {SearchResponseResultsRecordLabelsSearchResult}
		 * @memberof SearchResponseResults
		 */
		recordLabels?: SearchResponseResultsRecordLabelsSearchResult;
		/**
		 * 
		 * @type {SearchResponseResultsSongsSearchResult}
		 * @memberof SearchResponseResults
		 */
		songs?: SearchResponseResultsSongsSearchResult;
		/**
		 * 
		 * @type {SearchResponseResultsStationsSearchResult}
		 * @memberof SearchResponseResults
		 */
		stations?: SearchResponseResultsStationsSearchResult;
		/**
		 * 
		 * @type {SearchResponseResultsTopResultsSearchResult}
		 * @memberof SearchResponseResults
		 */
		top?: SearchResponseResultsTopResultsSearchResult;
	}
	/**
	 * An object containing an activities’ search result.
	 * @export
	 * @interface SearchResponseResultsActivitiesSearchResult
	 */
	export interface SearchResponseResultsActivitiesSearchResult {
		/**
		 * 
		 * @type {Array<Activities>}
		 * @memberof SearchResponseResultsActivitiesSearchResult
		 */
		data: Array<Activities>;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsActivitiesSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsActivitiesSearchResult
		 */
		next?: string;
	}
	/**
	 * An object containing an albums’ search result.
	 * @export
	 * @interface SearchResponseResultsAlbumsSearchResult
	 */
	export interface SearchResponseResultsAlbumsSearchResult {
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof SearchResponseResultsAlbumsSearchResult
		 */
		data: Array<Albums>;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsAlbumsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsAlbumsSearchResult
		 */
		next?: string;
	}
	/**
	 * An object containing the Apple curators’ search result.
	 * @export
	 * @interface SearchResponseResultsAppleCuratorsSearchResult
	 */
	export interface SearchResponseResultsAppleCuratorsSearchResult {
		/**
		 * 
		 * @type {Array<AppleCurators>}
		 * @memberof SearchResponseResultsAppleCuratorsSearchResult
		 */
		data: Array<AppleCurators>;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsAppleCuratorsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsAppleCuratorsSearchResult
		 */
		next?: string;
	}
	/**
	 * An object containing an artists’ search result.
	 * @export
	 * @interface SearchResponseResultsArtistsSearchResult
	 */
	export interface SearchResponseResultsArtistsSearchResult {
		/**
		 * 
		 * @type {Array<Artists>}
		 * @memberof SearchResponseResultsArtistsSearchResult
		 */
		data: Array<Artists>;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsArtistsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsArtistsSearchResult
		 */
		next?: string;
	}
	/**
	 * An object containing a curators’ search result.
	 * @export
	 * @interface SearchResponseResultsCuratorsSearchResult
	 */
	export interface SearchResponseResultsCuratorsSearchResult {
		/**
		 * 
		 * @type {Array<Curators>}
		 * @memberof SearchResponseResultsCuratorsSearchResult
		 */
		data: Array<Curators>;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsCuratorsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsCuratorsSearchResult
		 */
		next?: string;
	}
	/**
	 * An object containing a music videos’ search result.
	 * @export
	 * @interface SearchResponseResultsMusicVideosSearchResult
	 */
	export interface SearchResponseResultsMusicVideosSearchResult {
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof SearchResponseResultsMusicVideosSearchResult
		 */
		data: Array<MusicVideos>;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsMusicVideosSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsMusicVideosSearchResult
		 */
		next?: string;
	}
	/**
	 * An object containing a playlists’ search result.
	 * @export
	 * @interface SearchResponseResultsPlaylistsSearchResult
	 */
	export interface SearchResponseResultsPlaylistsSearchResult {
		/**
		 * 
		 * @type {Array<Playlists>}
		 * @memberof SearchResponseResultsPlaylistsSearchResult
		 */
		data: Array<Playlists>;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsPlaylistsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsPlaylistsSearchResult
		 */
		next?: string;
	}
	/**
	 * An object containing a record labels’ search result.
	 * @export
	 * @interface SearchResponseResultsRecordLabelsSearchResult
	 */
	export interface SearchResponseResultsRecordLabelsSearchResult {
		/**
		 * 
		 * @type {Array<RecordLabels>}
		 * @memberof SearchResponseResultsRecordLabelsSearchResult
		 */
		data: Array<RecordLabels>;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsRecordLabelsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsRecordLabelsSearchResult
		 */
		next?: string;
	}
	/**
	 * An object containing a songs’ search result.
	 * @export
	 * @interface SearchResponseResultsSongsSearchResult
	 */
	export interface SearchResponseResultsSongsSearchResult {
		/**
		 * 
		 * @type {Array<Songs>}
		 * @memberof SearchResponseResultsSongsSearchResult
		 */
		data: Array<Songs>;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsSongsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsSongsSearchResult
		 */
		next?: string;
	}
	/**
	 * An object containing a stations’ search result.
	 * @export
	 * @interface SearchResponseResultsStationsSearchResult
	 */
	export interface SearchResponseResultsStationsSearchResult {
		/**
		 * 
		 * @type {Array<Stations>}
		 * @memberof SearchResponseResultsStationsSearchResult
		 */
		data: Array<Stations>;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsStationsSearchResult
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsStationsSearchResult
		 */
		next?: string;
	}
	/**
	 * An object containing a top results’ search result.
	 * @export
	 * @interface SearchResponseResultsTopResultsSearchResult
	 */
	export interface SearchResponseResultsTopResultsSearchResult {
		/**
		 * 
		 * @type {Array<SearchResponseResultsTopResultsSearchResultDataInner>}
		 * @memberof SearchResponseResultsTopResultsSearchResult
		 */
		data: Array<SearchResponseResultsTopResultsSearchResultDataInner>;
	}
	/**
	 * 
	 * @export
	 * @interface SearchResponseResultsTopResultsSearchResultDataInner
	 */
	export interface SearchResponseResultsTopResultsSearchResultDataInner {
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsTopResultsSearchResultDataInner
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsTopResultsSearchResultDataInner
		 */
		type: SearchResponseResultsTopResultsSearchResultDataInnerTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchResponseResultsTopResultsSearchResultDataInner
		 */
		href: string;
		/**
		 * 
		 * @type {StationsAttributes}
		 * @memberof SearchResponseResultsTopResultsSearchResultDataInner
		 */
		attributes?: StationsAttributes;
		/**
		 * 
		 * @type {StationsRelationships}
		 * @memberof SearchResponseResultsTopResultsSearchResultDataInner
		 */
		relationships?: StationsRelationships;
		/**
		 * 
		 * @type {RecordLabelsViews}
		 * @memberof SearchResponseResultsTopResultsSearchResultDataInner
		 */
		views?: RecordLabelsViews;
	}


	/**
	 * @export
	 */
	export const SearchResponseResultsTopResultsSearchResultDataInnerTypeEnum = {
		Stations: 'stations'
	} as const;
	export type SearchResponseResultsTopResultsSearchResultDataInnerTypeEnum = typeof SearchResponseResultsTopResultsSearchResultDataInnerTypeEnum[keyof typeof SearchResponseResultsTopResultsSearchResultDataInnerTypeEnum];

	/**
	 * The response to a request for search suggestions.
	 * @export
	 * @interface SearchSuggestionsResponse
	 */
	export interface SearchSuggestionsResponse {
		/**
		 * 
		 * @type {SearchSuggestionsResponseResults}
		 * @memberof SearchSuggestionsResponse
		 */
		results: SearchSuggestionsResponseResults;
	}
	/**
	 * An object that represents the results of a search suggestions query.
	 * @export
	 * @interface SearchSuggestionsResponseResults
	 */
	export interface SearchSuggestionsResponseResults {
		/**
		 * 
		 * @type {Array<SearchSuggestionsResponseResultsSuggestionsInner>}
		 * @memberof SearchSuggestionsResponseResults
		 */
		suggestions: Array<SearchSuggestionsResponseResultsSuggestionsInner>;
	}
	/**
	 * 
	 * @export
	 * @interface SearchSuggestionsResponseResultsSuggestionsInner
	 */
	export interface SearchSuggestionsResponseResultsSuggestionsInner {
		/**
		 * 
		 * @type {string}
		 * @memberof SearchSuggestionsResponseResultsSuggestionsInner
		 */
		displayTerm: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchSuggestionsResponseResultsSuggestionsInner
		 */
		kind: SearchSuggestionsResponseResultsSuggestionsInnerKindEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchSuggestionsResponseResultsSuggestionsInner
		 */
		searchTerm: string;
		/**
		 * 
		 * @type {SearchSuggestionsResponseResultsTopResultSuggestionContent}
		 * @memberof SearchSuggestionsResponseResultsSuggestionsInner
		 */
		content: SearchSuggestionsResponseResultsTopResultSuggestionContent;
	}


	/**
	 * @export
	 */
	export const SearchSuggestionsResponseResultsSuggestionsInnerKindEnum = {
		TopResults: 'topResults'
	} as const;
	export type SearchSuggestionsResponseResultsSuggestionsInnerKindEnum = typeof SearchSuggestionsResponseResultsSuggestionsInnerKindEnum[keyof typeof SearchSuggestionsResponseResultsSuggestionsInnerKindEnum];

	/**
	 * A suggested search term from a search suggestion response.
	 * @export
	 * @interface SearchSuggestionsResponseResultsTermSuggestion
	 */
	export interface SearchSuggestionsResponseResultsTermSuggestion {
		/**
		 * 
		 * @type {string}
		 * @memberof SearchSuggestionsResponseResultsTermSuggestion
		 */
		displayTerm: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchSuggestionsResponseResultsTermSuggestion
		 */
		kind: SearchSuggestionsResponseResultsTermSuggestionKindEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchSuggestionsResponseResultsTermSuggestion
		 */
		searchTerm: string;
	}


	/**
	 * @export
	 */
	export const SearchSuggestionsResponseResultsTermSuggestionKindEnum = {
		Terms: 'terms'
	} as const;
	export type SearchSuggestionsResponseResultsTermSuggestionKindEnum = typeof SearchSuggestionsResponseResultsTermSuggestionKindEnum[keyof typeof SearchSuggestionsResponseResultsTermSuggestionKindEnum];

	/**
	 * A suggested popular result for similar search prefix terms.
	 * @export
	 * @interface SearchSuggestionsResponseResultsTopResultSuggestion
	 */
	export interface SearchSuggestionsResponseResultsTopResultSuggestion {
		/**
		 * 
		 * @type {SearchSuggestionsResponseResultsTopResultSuggestionContent}
		 * @memberof SearchSuggestionsResponseResultsTopResultSuggestion
		 */
		content: SearchSuggestionsResponseResultsTopResultSuggestionContent;
		/**
		 * 
		 * @type {string}
		 * @memberof SearchSuggestionsResponseResultsTopResultSuggestion
		 */
		kind: SearchSuggestionsResponseResultsTopResultSuggestionKindEnum;
	}


	/**
	 * @export
	 */
	export const SearchSuggestionsResponseResultsTopResultSuggestionKindEnum = {
		TopResults: 'topResults'
	} as const;
	export type SearchSuggestionsResponseResultsTopResultSuggestionKindEnum = typeof SearchSuggestionsResponseResultsTopResultSuggestionKindEnum[keyof typeof SearchSuggestionsResponseResultsTopResultSuggestionKindEnum];

	/**
	 * @type SearchSuggestionsResponseResultsTopResultSuggestionContent
	 * 
	 * @export
	 */
	export type SearchSuggestionsResponseResultsTopResultSuggestionContent = Activities | Albums | AppleCurators | Artists | Curators | MusicVideos | Playlists | RecordLabels | Songs | Stations;
	/**
	 * A resource object that represents a song.
	 * @export
	 * @interface Songs
	 */
	export interface Songs {
		/**
		 * 
		 * @type {string}
		 * @memberof Songs
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Songs
		 */
		type: SongsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof Songs
		 */
		href: string;
		/**
		 * 
		 * @type {SongsAttributes}
		 * @memberof Songs
		 */
		attributes?: SongsAttributes;
		/**
		 * 
		 * @type {SongsRelationships}
		 * @memberof Songs
		 */
		relationships?: SongsRelationships;
	}


	/**
	 * @export
	 */
	export const SongsTypeEnum = {
		Songs: 'songs'
	} as const;
	export type SongsTypeEnum = typeof SongsTypeEnum[keyof typeof SongsTypeEnum];

	/**
	 * The attributes for a song resource.
	 * @export
	 * @interface SongsAttributes
	 */
	export interface SongsAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		albumName: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		artistName: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		artistUrl?: string;
		/**
		 * 
		 * @type {Artwork}
		 * @memberof SongsAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		attribution?: string;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof SongsAttributes
		 */
		audioVariants?: Array<string>;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		composerName?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		contentRating?: SongsAttributesContentRatingEnum;
		/**
		 * 
		 * @type {number}
		 * @memberof SongsAttributes
		 */
		discNumber?: number;
		/**
		 * 
		 * @type {number}
		 * @memberof SongsAttributes
		 */
		durationInMillis: number;
		/**
		 * 
		 * @type {EditorialNotes}
		 * @memberof SongsAttributes
		 */
		editorialNotes?: EditorialNotes;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof SongsAttributes
		 */
		genreNames: Array<string>;
		/**
		 * 
		 * @type {boolean}
		 * @memberof SongsAttributes
		 */
		hasLyrics: boolean;
		/**
		 * 
		 * @type {boolean}
		 * @memberof SongsAttributes
		 */
		isAppleDigitalMaster: boolean;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		isrc?: string;
		/**
		 * 
		 * @type {number}
		 * @memberof SongsAttributes
		 */
		movementCount?: number;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		movementName?: string;
		/**
		 * 
		 * @type {number}
		 * @memberof SongsAttributes
		 */
		movementNumber?: number;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {PlayParameters}
		 * @memberof SongsAttributes
		 */
		playParams?: PlayParameters;
		/**
		 * 
		 * @type {Array<Preview>}
		 * @memberof SongsAttributes
		 */
		previews: Array<Preview>;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		releaseDate?: string;
		/**
		 * 
		 * @type {number}
		 * @memberof SongsAttributes
		 */
		trackNumber?: number;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		url: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsAttributes
		 */
		workName?: string;
	}


	/**
	 * @export
	 */
	export const SongsAttributesContentRatingEnum = {
		Clean: 'clean',
		Explicit: 'explicit'
	} as const;
	export type SongsAttributesContentRatingEnum = typeof SongsAttributesContentRatingEnum[keyof typeof SongsAttributesContentRatingEnum];

	/**
	 * The relationships for a song resource.
	 * @export
	 * @interface SongsRelationships
	 */
	export interface SongsRelationships {
		/**
		 * 
		 * @type {SongsRelationshipsSongsAlbumsRelationship}
		 * @memberof SongsRelationships
		 */
		albums?: SongsRelationshipsSongsAlbumsRelationship;
		/**
		 * 
		 * @type {SongsRelationshipsSongsArtistsRelationship}
		 * @memberof SongsRelationships
		 */
		artists?: SongsRelationshipsSongsArtistsRelationship;
		/**
		 * 
		 * @type {SongsRelationshipsSongsComposersRelationship}
		 * @memberof SongsRelationships
		 */
		composers?: SongsRelationshipsSongsComposersRelationship;
		/**
		 * 
		 * @type {SongsRelationshipsSongsGenresRelationship}
		 * @memberof SongsRelationships
		 */
		genres?: SongsRelationshipsSongsGenresRelationship;
		/**
		 * 
		 * @type {SongsRelationshipsSongsLibraryRelationship}
		 * @memberof SongsRelationships
		 */
		library?: SongsRelationshipsSongsLibraryRelationship;
		/**
		 * 
		 * @type {SongsRelationshipsSongsMusicVideosRelationship}
		 * @memberof SongsRelationships
		 */
		musicVideos?: SongsRelationshipsSongsMusicVideosRelationship;
		/**
		 * 
		 * @type {SongsRelationshipsSongsStationRelationship}
		 * @memberof SongsRelationships
		 */
		station?: SongsRelationshipsSongsStationRelationship;
	}
	/**
	 * A relationship from the song to its albums.
	 * @export
	 * @interface SongsRelationshipsSongsAlbumsRelationship
	 */
	export interface SongsRelationshipsSongsAlbumsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsAlbumsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsAlbumsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Albums>}
		 * @memberof SongsRelationshipsSongsAlbumsRelationship
		 */
		data: Array<Albums>;
	}
	/**
	 * A relationship from the song to its artists.
	 * @export
	 * @interface SongsRelationshipsSongsArtistsRelationship
	 */
	export interface SongsRelationshipsSongsArtistsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsArtistsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsArtistsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Artists>}
		 * @memberof SongsRelationshipsSongsArtistsRelationship
		 */
		data: Array<Artists>;
	}
	/**
	 * A relationship from the song to its composers.
	 * @export
	 * @interface SongsRelationshipsSongsComposersRelationship
	 */
	export interface SongsRelationshipsSongsComposersRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsComposersRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsComposersRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Artists>}
		 * @memberof SongsRelationshipsSongsComposersRelationship
		 */
		data: Array<Artists>;
	}
	/**
	 * A relationship from the song to its genres.
	 * @export
	 * @interface SongsRelationshipsSongsGenresRelationship
	 */
	export interface SongsRelationshipsSongsGenresRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsGenresRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsGenresRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Genres>}
		 * @memberof SongsRelationshipsSongsGenresRelationship
		 */
		data: Array<Genres>;
	}
	/**
	 * A relationship from the song to its library.
	 * @export
	 * @interface SongsRelationshipsSongsLibraryRelationship
	 */
	export interface SongsRelationshipsSongsLibraryRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsLibraryRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsLibraryRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<LibrarySongs>}
		 * @memberof SongsRelationshipsSongsLibraryRelationship
		 */
		data: Array<LibrarySongs>;
	}
	/**
	 * A relationship from the song to its music videos.
	 * @export
	 * @interface SongsRelationshipsSongsMusicVideosRelationship
	 */
	export interface SongsRelationshipsSongsMusicVideosRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsMusicVideosRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsMusicVideosRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<MusicVideos>}
		 * @memberof SongsRelationshipsSongsMusicVideosRelationship
		 */
		data: Array<MusicVideos>;
	}
	/**
	 * A relationship from the song to its station.
	 * @export
	 * @interface SongsRelationshipsSongsStationRelationship
	 */
	export interface SongsRelationshipsSongsStationRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsStationRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof SongsRelationshipsSongsStationRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Stations>}
		 * @memberof SongsRelationshipsSongsStationRelationship
		 */
		data: Array<Stations>;
	}
	/**
	 * The response to a songs request.
	 * @export
	 * @interface SongsResponse
	 */
	export interface SongsResponse {
		/**
		 * 
		 * @type {Array<Songs>}
		 * @memberof SongsResponse
		 */
		data: Array<Songs>;
	}
	/**
	 * A resource object that represents a station genre.
	 * @export
	 * @interface StationGenres
	 */
	export interface StationGenres {
		/**
		 * 
		 * @type {string}
		 * @memberof StationGenres
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof StationGenres
		 */
		type: StationGenresTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof StationGenres
		 */
		href: string;
		/**
		 * 
		 * @type {StationGenresAttributes}
		 * @memberof StationGenres
		 */
		attributes?: StationGenresAttributes;
		/**
		 * 
		 * @type {StationGenresRelationships}
		 * @memberof StationGenres
		 */
		relationships?: StationGenresRelationships;
	}


	/**
	 * @export
	 */
	export const StationGenresTypeEnum = {
		StationGenres: 'station-genres'
	} as const;
	export type StationGenresTypeEnum = typeof StationGenresTypeEnum[keyof typeof StationGenresTypeEnum];

	/**
	 * The attributes for the station genre resource.
	 * @export
	 * @interface StationGenresAttributes
	 */
	export interface StationGenresAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof StationGenresAttributes
		 */
		name: string;
	}
	/**
	 * The relationships for a station genre resource.
	 * @export
	 * @interface StationGenresRelationships
	 */
	export interface StationGenresRelationships {
		/**
		 * 
		 * @type {StationGenresRelationshipsStationGenresStationsRelationship}
		 * @memberof StationGenresRelationships
		 */
		stations?: StationGenresRelationshipsStationGenresStationsRelationship;
	}
	/**
	 * A relationship from the station genre to associated stations.
	 * @export
	 * @interface StationGenresRelationshipsStationGenresStationsRelationship
	 */
	export interface StationGenresRelationshipsStationGenresStationsRelationship {
		/**
		 * 
		 * @type {string}
		 * @memberof StationGenresRelationshipsStationGenresStationsRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof StationGenresRelationshipsStationGenresStationsRelationship
		 */
		next?: string;
		/**
		 * 
		 * @type {Array<Stations>}
		 * @memberof StationGenresRelationshipsStationGenresStationsRelationship
		 */
		data: Array<Stations>;
	}
	/**
	 * The response to a specific station genres resource request.
	 * @export
	 * @interface StationGenresResponse
	 */
	export interface StationGenresResponse {
		/**
		 * 
		 * @type {Array<StationGenres>}
		 * @memberof StationGenresResponse
		 */
		data: Array<StationGenres>;
	}
	/**
	 * A resource object that represents a station.
	 * @export
	 * @interface Stations
	 */
	export interface Stations {
		/**
		 * 
		 * @type {string}
		 * @memberof Stations
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Stations
		 */
		type: StationsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof Stations
		 */
		href: string;
		/**
		 * 
		 * @type {StationsAttributes}
		 * @memberof Stations
		 */
		attributes?: StationsAttributes;
		/**
		 * 
		 * @type {StationsRelationships}
		 * @memberof Stations
		 */
		relationships?: StationsRelationships;
	}


	/**
	 * @export
	 */
	export const StationsTypeEnum = {
		Stations: 'stations'
	} as const;
	export type StationsTypeEnum = typeof StationsTypeEnum[keyof typeof StationsTypeEnum];

	/**
	 * The attributes for a station resource.
	 * @export
	 * @interface StationsAttributes
	 */
	export interface StationsAttributes {
		/**
		 * 
		 * @type {Artwork}
		 * @memberof StationsAttributes
		 */
		artwork: Artwork;
		/**
		 * 
		 * @type {number}
		 * @memberof StationsAttributes
		 */
		durationInMillis?: number;
		/**
		 * 
		 * @type {EditorialNotes}
		 * @memberof StationsAttributes
		 */
		editorialNotes?: EditorialNotes;
		/**
		 * 
		 * @type {string}
		 * @memberof StationsAttributes
		 */
		episodeNumber?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof StationsAttributes
		 */
		contentRating?: StationsAttributesContentRatingEnum;
		/**
		 * 
		 * @type {boolean}
		 * @memberof StationsAttributes
		 */
		isLive: boolean;
		/**
		 * 
		 * @type {string}
		 * @memberof StationsAttributes
		 */
		mediaKind: StationsAttributesMediaKindEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof StationsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {PlayParameters}
		 * @memberof StationsAttributes
		 */
		playParams?: PlayParameters;
		/**
		 * 
		 * @type {string}
		 * @memberof StationsAttributes
		 */
		stationProviderName?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof StationsAttributes
		 */
		url: string;
	}


	/**
	 * @export
	 */
	export const StationsAttributesContentRatingEnum = {
		Clean: 'clean',
		Explicit: 'explicit'
	} as const;
	export type StationsAttributesContentRatingEnum = typeof StationsAttributesContentRatingEnum[keyof typeof StationsAttributesContentRatingEnum];

	/**
	 * @export
	 */
	export const StationsAttributesMediaKindEnum = {
		Audio: 'audio',
		Video: 'video'
	} as const;
	export type StationsAttributesMediaKindEnum = typeof StationsAttributesMediaKindEnum[keyof typeof StationsAttributesMediaKindEnum];

	/**
	 * The name of the relationship you want to fetch for this resource.
	 * @export
	 * @interface StationsRelationships
	 */
	export interface StationsRelationships {
		/**
		 * 
		 * @type {StationsRelationshipsStationsRadioShowRelationship}
		 * @memberof StationsRelationships
		 */
		radioShow?: StationsRelationshipsStationsRadioShowRelationship;
	}
	/**
	 * For radio show episodes, this relationship is the Apple Curator that represents the radio show.
	 * @export
	 * @interface StationsRelationshipsStationsRadioShowRelationship
	 */
	export interface StationsRelationshipsStationsRadioShowRelationship {
		/**
		 * 
		 * @type {Array<AppleCurators>}
		 * @memberof StationsRelationshipsStationsRadioShowRelationship
		 */
		data: Array<AppleCurators>;
		/**
		 * 
		 * @type {string}
		 * @memberof StationsRelationshipsStationsRadioShowRelationship
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof StationsRelationshipsStationsRadioShowRelationship
		 */
		next?: string;
	}
	/**
	 * The response to a stations request.
	 * @export
	 * @interface StationsResponse
	 */
	export interface StationsResponse {
		/**
		 * 
		 * @type {Array<Stations>}
		 * @memberof StationsResponse
		 */
		data: Array<Stations>;
	}
	/**
	 * A resource object that represents a storefront, an Apple Music and iTunes Store territory that the content is available in.
	 * @export
	 * @interface Storefronts
	 */
	export interface Storefronts {
		/**
		 * 
		 * @type {string}
		 * @memberof Storefronts
		 */
		id: string;
		/**
		 * 
		 * @type {string}
		 * @memberof Storefronts
		 */
		type: StorefrontsTypeEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof Storefronts
		 */
		href: string;
		/**
		 * 
		 * @type {StorefrontsAttributes}
		 * @memberof Storefronts
		 */
		attributes?: StorefrontsAttributes;
	}


	/**
	 * @export
	 */
	export const StorefrontsTypeEnum = {
		Storefronts: 'storefronts'
	} as const;
	export type StorefrontsTypeEnum = typeof StorefrontsTypeEnum[keyof typeof StorefrontsTypeEnum];

	/**
	 * The attributes for the storefronts resource.
	 * @export
	 * @interface StorefrontsAttributes
	 */
	export interface StorefrontsAttributes {
		/**
		 * 
		 * @type {string}
		 * @memberof StorefrontsAttributes
		 */
		defaultLanguageTag: string;
		/**
		 * 
		 * @type {string}
		 * @memberof StorefrontsAttributes
		 */
		explicitContentPolicy: StorefrontsAttributesExplicitContentPolicyEnum;
		/**
		 * 
		 * @type {string}
		 * @memberof StorefrontsAttributes
		 */
		name: string;
		/**
		 * 
		 * @type {Array<string>}
		 * @memberof StorefrontsAttributes
		 */
		supportedLanguageTags: Array<string>;
	}


	/**
	 * @export
	 */
	export const StorefrontsAttributesExplicitContentPolicyEnum = {
		Allowed: 'allowed',
		OptIn: 'opt-in',
		Prohibited: 'prohibited'
	} as const;
	export type StorefrontsAttributesExplicitContentPolicyEnum = typeof StorefrontsAttributesExplicitContentPolicyEnum[keyof typeof StorefrontsAttributesExplicitContentPolicyEnum];

	/**
	 * The response to a storefront request.
	 * @export
	 * @interface StorefrontsResponse
	 */
	export interface StorefrontsResponse {
		/**
		 * 
		 * @type {Array<Storefronts>}
		 * @memberof StorefrontsResponse
		 */
		data: Array<Storefronts>;
	}
	/**
	 * A to-one or to-many relationship view from one resource object to others representing interesting associations.
	 * @export
	 * @interface View
	 */
	export interface View {
		/**
		 * 
		 * @type {string}
		 * @memberof View
		 */
		href?: string;
		/**
		 * 
		 * @type {string}
		 * @memberof View
		 */
		next?: string;
		/**
		 * Attributes representing the metadata of the view.
		 * @type {any}
		 * @memberof View
		 */
		attributes?: any | null;
		/**
		 * 
		 * @type {Array<Resource>}
		 * @memberof View
		 */
		data: Array<Resource>;
		/**
		 * Information about the request or response.
		 * @type {any}
		 * @memberof View
		 */
		meta?: any | null;
	}
}
